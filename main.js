let range = document.querySelector('.number'),
    rangeNum = document.querySelector('.range-num');

range.oninput = function () {
    console.log(this.value);
    rangeNum.style.left = this.value + 'px';
    rangeNum.innerHTML = this.value;
}