let users = [];

function playgame() {
    // یوزر کی انپٹ ویلیو حاصل کرنا
    let user_email = document.getElementById("email");
    let user_password = document.getElementById("password");
    
    // چیک کریں کہ ایلیمینٹس موجود ہیں
    if (!user_email || !user_password) {
        console.error("Email or password field not found!");
        return;
    }

    let eml = user_email.value;
    let pas = user_password.value;

    // ای میل کی تصدیق کریں
    if (!validateEmail(eml)) {
        alert("Invalid email format!");
        return;
    }

    // یوزر کا آبجیکٹ بنائیں
    let user = {
        email: eml,
        password: pas // پاسورڈ کو ہیش کرنے کی تجویز دی جاتی ہے، لیکن اس کو براہ راست محفوظ کیا جا رہا ہے
    };

    // ایریے میں یوزر کا ڈیٹا ڈالنا
    users.push(user);
    console.log("User added:", user);
}

// ای میل کی درستگی کے لیے ریگولر ایکسپریشن
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// لاگ ان فنکشن
function login() {
    // تمام یوزرز کو کنسول پر پرنٹ کریں
    console.log("All users:", users);
}
