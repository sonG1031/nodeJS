const a = true;
if (a) {
    // ES 모듈은 if문 안에서 import하는 것이 불가능합니다. 
    // 이럴 때 다이내믹 임포트를 사용합니다
    //import './func.mjs'; // error

    const m1 = await import('./func.mjs');
    console.log(m1);
    const m2 = await import('./var.mjs');
    console.log(m2);
}
console.log('성공');