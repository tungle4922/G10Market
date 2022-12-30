document.getElementById('header').innerHTML = `
<div class="grid wide">
<nav class="header__navbar">
    <ul class="header__navbar-list">
        <li class="header__navbar-item">
            <span class="header__navbar-item-tittle">Kết nối với G10-MARKET</span>
            <a href="" class="header__navbar-item-link">
                <i class="header__navbar-icon fa-brands fa-facebook"></i>
            </a>
            <a href="" class="header__navbar-item-link">
                <i class="header__navbar-icon fa-brands fa-instagram"></i>
            </a>
        </li>
        <li class="header__navbar-phone">
            <i class="fa-solid fa-phone"></i>
            <span class="header__navbar-phone-number">1900 666 666</span>
        </li>
    </ul>


    <!-- before log in  -->
    <ul class="header__navbar-list-two">
        <a href="./help_center.html" class="header__suport">
            <i class="fa-regular fa-circle-question"></i>
            Hỗ Trợ Khách Hàng
        </a>
        <li class="header__login">Đăng nhập</li>
        <li class="header__seperate">/</li>
        <li class="header__signin">Đăng ký</li>
    </ul>

    <!-- after log in  -->
    <div class="header_menu disabled">
        <div class="img_name-box">
            <img src="./assests/img/User-Profile-PNG-Image.png" alt="" class="img_header">
            <p class="username_header">User13522</p>
        </div>

        <ul class="header__navbar-user-menu">
            <li class="header__navbar-user-item">
                <a href="">Tài khoản của tôi</a>
            </li>
            <li class="header__navbar-user-item">
                <a href="">Đơn mua của tôi</a>
            </li>
            <li class="header__navbar-user-item header__navbar-user-item--separate">
                <a href="">Đăng xuất</a>
            </li>
        </ul>
    </div>
</nav>

<!-- header body  -->
<div class="header__body">
    <div class="header-bars" onclick="openMenuMobile()">
        <i class="header-bars-icon fa-solid fa-bars"></i>
    </div>

    <div class="header__logo">
        <a href="./index.html" class="header__logo-link">
            <img src="./assests/img/logo_test.png" alt="" class="header__logo-img" />
        </a>
    </div>

    <div class="header__search">
        <div class="header__search-input-wrap">
            <input type="text" class="header__search-input" placeholder="Tìm kiếm trên G10 Market" />
        </div>

        <button class="header__search-btn">
            <i class="header__search-btn-icon fa-solid fa-magnifying-glass"></i>
        </button>
    </div>

    <a href="./cart.html" class="header__cart">
        <i class="header__cart-icon fa-solid fa-cart-plus"></i>
        <div class="header__cart-list">
            <img src="./assests/img/empty_cart_2.png" alt="" class="header__cart-list-img-empty" />
            <span class="header__cart-list-img-empty-tittle">Oops, giỏ hàng trống</span>
        </div>
    </a>
</div>
</div>
`