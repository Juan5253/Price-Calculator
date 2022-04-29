
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
function calculatePriceWithDiscount(price, discount)
{
    const priceWithDiscount = (price*(100-discount))/100;
    return priceWithDiscount;
}
function calculateDiscountValue(price,discount)
{
    const valueOfDiscount = price-calculatePriceWithDiscount(price, discount);
    return valueOfDiscount;
}
//Calculating the final price, with initial discount value and coupon value
function calculateFinalPrice(price, discount, couponValue)
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

    return calculatePriceWithDiscount(price, totalDiscount) + " el descuento total es: " + totalDiscount;
}
function onClickButtonPriceDiscount()
{
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = parseFloat(inputPrice.value);
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = parseFloat(inputDiscount.value);
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const price = calculatePriceWithDiscount(priceValue, discountValue);
    const discount = calculateDiscountValue(priceValue, discountValue);
    const finalPrice = calculateFinalPrice(priceValue, discountValue, couponValue);
    
    const priceValueResult = document.getElementById("priceValueResult");
    priceValueResult.innerText = "El precio del producto con descuento es de: " + price;
    const discountValueResult = document.getElementById("discountValueResult"); 
    discountValueResult.innerText = "El valor del descuento es de: " + discount;
    const finalValueResult = document.getElementById("finalPriceResult");
    finalValueResult.innerText = "El valor final es de: " + finalPrice;
}