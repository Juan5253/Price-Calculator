
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
//Calculating the final price, with initial discount value and coupon value
function finalPrice(price, discount, couponValue)
{
    let totalDiscount;
    //first step, the const isCouponValueValid is declared to will be the function of method .find
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    //second step, the const userCoupon check the parameter couponValue already exists in the Coupons object.
    const userCoupon = coupons.find(isCouponValueValid);
    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
        totalDiscount = discount;
    }
    else {
        const couponDiscount = userCoupon.discount; //and finally the variable couponDiscount save the coupon value of discount
        totalDiscount = discount+couponDiscount;
    }
    return priceWithDiscount(price, totalDiscount);
}
