var Size = Quill.import('attributors/style/size');
Size.whitelist = ['12px', '14px', '16px', '18px', '20px', '24px', '28px'];
Quill.register(Size, true);
const quill1 = new Quill('#editor1', {
  theme: 'snow',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], 
      ['blockquote', 'code-block'], 
      ['image'],
      ['link'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }], 
      // [{ 'size': ['small', false, 'large', 'huge'] }], 
      [{ 'size': ['12px', '14px', '16px', '18px', '20px', '24px', '28px'] }],
      [{ 'color': [] }, { 'background': [] }], 
      [{ 'align': [] }], 
      [ 'clean' ], 
    ],
    imageResize: {
      displaySize: true
    },
  },
  placeholder: '寫下產品描述',
});
quill1.getModule('toolbar').addHandler('image', () => {
  imageHandler();
});
function imageHandler() {
  var range = quill1.getSelection();
  var value = prompt('please copy paste the image url here.');
  if(value){
      quill1.insertEmbed(range.index, 'image', value);
  }
}

const quill = new Quill('#editor', {
  theme: 'snow',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], 
      ['blockquote', 'code-block'], 
      ['image'],
      ['link'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }], 
      [{ 'size': ['small', false, 'large', 'huge'] }], 
      [{ 'color': [] }, { 'background': [] }], 
      [{ 'align': [] }], 
      [ 'clean' ], 
    ],
    imageResize: {
      displaySize: true
    },
  },
  placeholder: '寫下產品描述',
});
quill.getModule('toolbar').addHandler('image', () => {
  selectLocalImage();
});
function selectLocalImage(){
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.click();

  input.onchange = () => {
    const file = input.files[0];

    if (/^image\//.test(file.type)) {
      const range = quill.getSelection();
      quill.insertEmbed(range.index, 'image', `https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`);
    } else {
      alert('請確認上傳的檔案為圖片檔 ~');
    }
    
  };
}