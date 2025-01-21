// 定義路由步驟的地方，預設會照著陣列中[0,1,2,3,4]步驟推進或退後，例如
// [
// { name: "開始點餐", path: "/" },
// { name: "選擇湯底", path: "/soup" },
// { name: "選擇加購品", path: "/ingredients" },
// { name: "選擇付款方式", path: "/payment" },
// { name: "訂單成功送出", path: "/success" },
// ]
// 當前在選擇加購品的頁面(/ingredients)，那他的上一步就是選擇湯底(/soup)，下一步就是選擇付款方式(/payment)
// 如果需要變動順序，只需調整陣列內的內容即可
export const flowSteps = [
  { name: "開始點餐", path: "/" },
  { name: "選擇湯底", path: "/soup" },
  { name: "選擇加購品", path: "/ingredients" },
  { name: "選擇付款方式", path: "/payment" },
  { name: "訂單成功送出", path: "/success" },
]