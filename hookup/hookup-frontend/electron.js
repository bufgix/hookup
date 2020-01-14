const { app, BrowserWindow } = require('electron')

// Pencere nesnesinin genel bir referansını koruyun, 
// yoksa JavaScript nesnesi çöpleri topladığında pencere otomatik olarak kapatılır.
let win

function createWindow () {
  // Tarayıcı penceresini oluştur.
  win = new BrowserWindow({
    width: 1380,
    height: 640,
    webPreferences: {
      nodeIntegration: true
    },
    frame: true
  })

  // ve uygulamanın index.html dosyasını yükle.
  win.loadURL("http://localhost:5000/adminlogin")

  win.removeMenu()

  // DevTools'u aç.
  win.webContents.openDevTools()

  // Pencere kapatıldığında ortaya çıkar.
  win.on('closed', () => {
  //Pencere nesnesini referans dışı bırakın,
  // uygulamanız çoklu pencereleri destekliyorsa genellikle pencereleri
  // bir dizide saklarsınız, bu, ilgili öğeyi silmeniz gereken zamandır.
    win = null
  })
}
// Bu yöntem, Electron başlatmayı tamamladığında
// ve tarayıcı pencereleri oluşturmaya hazır olduğunda çağrılır.
// Bazı API'ler sadece bu olayın gerçekleşmesinin ardından kullanılabilir.
app.on('ready', createWindow)

// Bütün pencereler kapatıldığında çıkış yap.
app.on('window-all-closed', () => {
  // MacOS'de kullanıcı CMD + Q ile çıkana dek uygulamaların ve menü barlarının
  // aktif kalmaya devam etmesi normaldir.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // MacOS'de dock'a tıklandıktan sonra eğer başka pencere yoksa
  // yeni pencere açılması normaldir.
  if (win === null) {
    createWindow()
  }
})