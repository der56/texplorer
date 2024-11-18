const folder = document.querySelector('#createFolder')
const uifolders = document.querySelector('#uifolders')
const foldername = document.querySelector('#foldername')
const folderui = document.querySelector('#folderui')
const newFolderId = document.querySelector('#newFolder')
const newFolderClick = document.querySelector('#newFolderClick')

const file = document.querySelector('#createFile')
const uifiles = document.querySelector('#uifiles')
const filename = document.querySelector('#filename')
const fileui = document.querySelector('#fileui')
const newFileId = document.querySelector('#newFile')
const newFileClick = document.querySelector('#newFileClick')

const empty = document.querySelector('#empty')

newFolderClick.style.display = 'none'
newFileClick.style.display = 'none'

folder.addEventListener('click', (e) => {
    if (e.button === 0) {
        const clickNewFolder = () => {
            empty.style.display = 'none'
            newFolderClick.style.display = 'inline-block'
            newFolderId.select()
            newFolderId.addEventListener('keypress', async (e) => {
                if (e.key === 'Enter') {
                    let response = newFolderId.value
                    await fetch(window.location.href + 'controller/createFolder', {
                        method: 'POST',
                        headers: {
                            'Accept': 'text/plain',
                            'Content-Type': 'text/plain'
                        },
                        body: response
                    }).then(response => {
                        if (response.ok === true) {
                            window.location.reload()
                        } else {
                            return alert("error creating the folder")
                        }
                    })
                }
            })
            document.addEventListener('keydown', async (e) => {
                if (e.key === 'Escape') {
                    newFileClick.style.display = 'none'
                }
            })
        }
        clickNewFolder()
    }
})

file.addEventListener('click', (e) => {
    if (e.button === 0) {
        const clickNewFile = () => {
            empty.style.display = 'none'
            newFileClick.style.display = 'inline-block'
            newFileId.select()
            newFileId.addEventListener('keypress', async (e) => {
                if (e.key === 'Enter') {
                    let response = newFileId.value
                    await fetch(window.location.href + 'controller/createFile', {
                        method: 'POST',
                        headers: {
                            'Accept': 'text/plain',
                            'Content-Type': 'text/plain'
                        },
                        body: response
                    }).then(response => {
                        if (response.ok === true) {
                            window.location.reload()
                        } else {
                            return alert("error creating the file")
                        }
                    })
                }
            })
        document.addEventListener('keydown', async (e) => {
            if (e.key === 'Escape') {
                newFileClick.style.display = 'none'
            }
        })
        }
        clickNewFile()
    }
})

fetch(window.location.href + 'controller/viewFolders')
    .then((response) => response.json())
    .then(files => {
        if (files.files.length === 0) {
            empty.style.display = 'block';
            uifolders.style.display = 'none';
            uifiles.style.display = 'none';
        } else {
            empty.style.display = 'none';
            uifolders.style.display = 'block';
            uifiles.style.display = 'block';
        }
        console.log(files.files)
        this.f = files.files
        for (var i = 0; i < files.files.length; i++) {
            if (!f[i].includes(".")) {
                console.log('folder')
                foldername.insertAdjacentHTML('afterend', `<div class="ctn-folder"><div class="folderdiv">📁</div><h3 class="foldernameI">${f[i]}</h3></div>`)
            } else {
                console.log('file')
                foldername.insertAdjacentHTML('afterend', `<div class="ctn-file"><div class="filediv">📄</div><h3 class="filenameI">${f[i]}</h3></div>`)
            }
        }
    })
