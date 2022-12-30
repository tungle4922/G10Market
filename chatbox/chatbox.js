document.getElementById('chat-box').innerHTML = `
<div class="open_chat" onclick="openChat()">
<i class="open_chat-icon fa-regular fa-comments"></i>
</div>
<div class="chat-popup" id="myChat">
<div class="chat-popup_title-wrap">
    <i class="chat-popup-close fa-solid fa-xmark" onclick="closeChat()"></i>
    <h1 class="chat-popup_title">
        CSKH G10 Market
        <i class="fa-solid fa-phone-flip" style="font-size: 1.6rem; color: #f5f5f5"></i>
    </h1>
</div>

<form action="" class="chat-container">
    <label for="msg"><b style="font-size: 1.2rem; font-weight: 500">Họ và tên</b></label>
    <textarea placeholder="Nhập họ và tên của bạn..." name="msg" style="min-height: 10px; padding-bottom: 0px"
        required></textarea>

    <label for="msg"><b style="font-size: 1.2rem; font-weight: 500">Số điện thoại</b></label>
    <textarea placeholder="Nhập số điện thoại liên hệ..." name="msg"
        style="min-height: 10px; padding-bottom: 0px" required></textarea>

    <label for="msg"><b style="font-size: 1.2rem; font-weight: 500">Message</b></label>
    <textarea placeholder="Nhập tin nhắn..." name="msg" required></textarea>

    <button type="submit" class="btn">Gửi tin nhắn</button>
    <!-- <button type="button" class="btn cancel" onclick="closeChat()">Thoát</button> -->
</form>
</div>
`