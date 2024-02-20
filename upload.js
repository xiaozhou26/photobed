document.getElementById('upload-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // 获取文件上传的表单数据
  const formData = new FormData();
  const file = document.getElementById('fileToUpload').files[0];
  formData.append('file', file);

  // 发送POST请求到您的后端API
  fetch('https://childish-screeching-clef.glitch.me/upload', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    // 显示上传后的图片URL
    document.getElementById('image-url').textContent = data.imageUrl;
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
