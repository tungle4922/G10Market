document.getElementById('modal_wrap').innerHTML = `
<!-- modal đăng ký -->
  <div class="modal modal_reg">
    <form action="" method="POST" class="form" id="form-1">
      <i class="form_close-reg fa-solid fa-xmark"></i>
      <div class="form_heading">
        <i class="form_heading-icon fa-solid fa-seedling"></i>
        <h3 class="heading">Đăng ký tài khoản</h3>
      </div>
      <p class="desc">Thỏa sức mua sắm sản phẩm tại G10 Market</p>

      <div class="spacer"></div>

      <!-- <div class="form-group">
                  <label for="fullname" class="form-label">Tên đầy đủ</label>
                  <input id="fullname" name="fullname" type="text" placeholder="VD: Tùng Lê" class="form-control">
                  <span class="form-message"></span>
              </div> -->

      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input id="email" name="email" type="text" placeholder="VD: email@gmail.com" class="form-control" />
        <span class="form-message"></span>
      </div>

      <div class="form-group">
        <label for="password" class="form-label">Mật khẩu</label>
        <input id="password" name="password" type="password" placeholder="Nhập mật khẩu" class="form-control" />
        <span class="form-message"></span>
      </div>

      <div class="form-group">
        <label for="password_confirmation" class="form-label">Nhập lại mật khẩu</label>
        <input id="password_confirmation" name="password_confirmation" placeholder="Nhập lại mật khẩu" type="password"
          class="form-control" />
        <span class="form-message"></span>
      </div>

      <button class="form-submit" id="submit-signup">Đăng ký</button>
      <div class="switch_to_log">
        <p class="switch_to_log-title">Đã có tài khoản G10 Market?</p>
        <p class="switch_to_log-btn">Đăng nhập</p>
      </div>
    </form>
  </div>
  <!-- modal đăng nhập  -->
  <div class="modal modal_log">
    <form action="" method="POST" class="form" id="form-2">
      <i class="form_close-log fa-solid fa-xmark"></i>
      <div class="form_heading">
        <i class="form_heading-icon fa-solid fa-seedling"></i>
        <h3 class="heading">Đăng nhập</h3>
      </div>
      <p class="desc">Thỏa sức mua sắm sản phẩm tại G10 Market</p>

      <div class="spacer"></div>

      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input id="email" name="email" type="text" placeholder="VD: email@gmail.com" class="form-control" />
        <span class="form-message"></span>
      </div>

      <div class="form-group">
        <label for="password" class="form-label">Mật khẩu</label>
        <input id="password" name="password" type="password" placeholder="Nhập mật khẩu" class="form-control" />
        <span class="form-message"></span>
      </div>

      <div class="pw_action">
        <div class="log_rmb-pw">
          <input type="checkbox" id="checkbox1" />
          <label for="checkbox1" class="log_rmb-pw-tittle">Nhớ mật khẩu</label>
        </div>
        <a href="" class="log_forgotpw">Quên mật khẩu?</a>
      </div>
      <button class="form-submit" id="submit-login">Đăng nhập</button>
      <div class="switch_to_reg">
        <p class="switch_to_reg-title">Chưa có tài khoản G10 Market?</p>
        <p class="switch_to_reg-btn">Đăng ký</p>
      </div>
    </form>
  </div>
`