
const coupons = [ //The object coupons that containt the name and value of all cupons.
    {
        name: "RegularDiscount",
        discount: 15,
    },
    {
        name: "PlatinumDiscount",
        discount: 20,
    },
    {
        name: "GoldDiscount",
        discount: 35,
    },
];
function priceWithDiscount(price, discount)
{
    const priceWithDiscount = (price*(100-discount))/100;
    return priceWithDiscount;
}
function discountValue(price,discount)
{
    const valueOfDiscount = price-priceWithDiscount(price, discount);
    return valueOfDiscount;
}
//Validation of coupon user
// const isCouponValueValid = function (coupon) {
//     return coupon.name === couponValue;
// };
// const userCoupon = coupons.find(isCouponValueValid);