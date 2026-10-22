const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
let stored='[]';
const context={console,window:{addEventListener(){},location:{hash:''}},location:{hash:''},
 document:{body:{classList:{add(){},toggle(){},contains(){return false}}},dispatchEvent(){},
 addEventListener(){},querySelectorAll(){return []},getElementById(){return null},querySelector(){return null}},
 localStorage:{getItem(key){return key==='site_theme_dark'?'0':stored},setItem(){}},
 CustomEvent:function(){},alert(){}};
vm.createContext(context);
vm.runInContext(fs.readFileSync('script.js','utf8'),context);
stored='{bad json';assert.equal(context.getTestimonials().length,0);
stored='{}';assert.equal(context.getTestimonials().length,0);
stored=JSON.stringify([{name:'<img onerror=alert(1)>',text:'<script>bad</script>',rate:5},{rate:100},{rate:-1},{rate:'5'},null]);
const rows=context.getTestimonials();assert.equal(rows.length,1);assert.equal(rows[0].rate,5);
const summary=context.computeRatingSummary([{rate:5},{rate:3}]);
assert.equal(summary.avg,4);assert.equal(summary.count,2);
assert.equal(context.computeRatingSummary([]).avg,0);
const source=fs.readFileSync('script.js','utf8');
assert.ok(!source.includes('forcedBreakdown'));
assert.ok(source.includes('nameNode.textContent'));
assert.ok(!/https:\/\/(wa\.me|docs\.google\.com\/forms)/.test(source));
console.log('Review validation, corrupted storage, rating summary and inert contact checks passed.');
