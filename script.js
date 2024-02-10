// メールフォームの要素を取得する
var form = document.getElementById("mail-form");
var name = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");
var submit = document.getElementById("submit");

// メールフォームの送信ボタンが押されたときの処理を定義する
submit.addEventListener("click", function(event) {
 // ページのリロードを防ぐ
 event.preventDefault();
 // 入力された値を取得する
 var nameValue = name.value;
 var emailValue = email.value;
 var messageValue = message.value;
 // 入力された値が空でないかチェックする
 if (nameValue && emailValue && messageValue) {
  // メールの件名と本文を作成する
  var subject = "お問い合わせありがとうございます";
  var body = nameValue + "様\n\n" + messageValue + "\n\n" + "返信先：" + emailValue;
  // メールのリンクを作成する
  var mailto = "mailto:あなたのメールアドレス?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  // メールのリンクを開く
  window.open(mailto);
  // メールフォームの内容をクリアする
  form.reset();
 } else {
  // 入力された値が空の場合は、アラートを表示する
  alert("すべての項目を入力してください");
 }
});
