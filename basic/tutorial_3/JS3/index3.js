console.log("Im Ready!");

document.addEventListener("DOMContentLoaded", () => {
   
    console.log("Load Finish!");
    const button = document.getElementById("openMapButton");

    // 為按鈕添加點擊事件
    button.addEventListener("click", () => {
        alert("按鈕被點擊了！");
    });
});

// 等待 DOM 加載完成
document.addEventListener("DOMContentLoaded", () => {
    // 取得按鈕元素
    const button = document.getElementById("openMapButton");

    // 為按鈕添加點擊事件
    button.addEventListener("click", () => {
        alert("你點擊了按鈕！");
    });
});