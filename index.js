let CORRECT_PASSWORD = "Vinden4554111"; 
let REMOTE_UPDATED = null;

const fetchRemotePassword = async () => {
    try {
        const response = await fetch('password.json', { cache: 'no-store' });
        const data = await response.json();
        CORRECT_PASSWORD = data.password;
        REMOTE_UPDATED = data.updated;
        return data;
    } catch (error) {
        console.error("Failed to fetch remote password:", error);
        return null;
    }
};

const box=document.getElementById("searchBox")
const input=document.getElementById("input")
const clear=document.getElementById("clear")
const menuBtn=document.getElementById("menuBtn")
const bgInput=document.getElementById("bgInput")
const iconInput=document.getElementById("iconInput")
const form=document.getElementById("form")
const announce=document.getElementById("announce")
const menuOverlay=document.getElementById("menuOverlay")
const mainMenu=document.getElementById("mainMenu")
const keybindsMenu=document.getElementById("keybindsMenu")
const infoMenu=document.getElementById("infoMenu")
const btnCredits=document.getElementById("btnCredits")
const btnQuestions=document.getElementById("btnQuestions")
const questionsMenu=document.getElementById("questionsMenu")
const creditsMenu=document.getElementById("creditsMenu")
const btnQuest1=document.getElementById("btnQuest1")
const btnQuest2=document.getElementById("btnQuest2")
const btnQuest3=document.getElementById("btnQuest3")
const btnQuest4=document.getElementById("btnQuest4")
const quest1Menu=document.getElementById("quest1Menu")
const quest2Menu=document.getElementById("quest2Menu")
const quest3Menu=document.getElementById("quest3Menu")
const quest4Menu=document.getElementById("quest4Menu")
const btnCommands=document.getElementById("btnCommands")
const commandsMenu=document.getElementById("commandsMenu")
const controlsMenu=document.getElementById("controlsMenu") 
const btnControls=document.getElementById("btnControls") 
const btnQuest5=document.getElementById("btnQuest5") 
const quest5Menu=document.getElementById("quest5Menu") 

const btnEngines=document.getElementById("btnEngines")
const btnKeybinds=document.getElementById("btnKeybinds")
const bookmarksMenu=document.getElementById("bookmarksMenu")
const addShortcutMenu=document.getElementById("addShortcutMenu")
const shortcutFormTitle=document.getElementById("shortcutFormTitle")
const CURRENCY_API_URL = "https://api.exchangerate-api.com/v4/latest/";


const enginesMenu=document.getElementById("enginesMenu")
const engineList=document.getElementById("engineList")
const btnChangeBg=document.getElementById("btnChangeBg")

const btnBookmarks=document.getElementById("btnBookmarks")
const btnInfo=document.getElementById("btnInfo")
const closeButtons=document.querySelectorAll(".close-menu")
const backButtons=document.querySelectorAll(".back-menu")
const backButtonForInfo=document.querySelectorAll(".back-menu-info")
const backButtonForQuest=document.querySelectorAll(".back-menu-quest")
const backButtonForControls=document.querySelectorAll(".back-menu-controls")
const bookmarksGrid=document.getElementById("bookmarksGrid")
const limitText=document.getElementById("limitText")
const backFromAdd=document.getElementById("backFromAdd")

const bmName=document.getElementById("bmName")
const bmNameCount=document.getElementById("bmNameCount")
const bmUrl=document.getElementById("bmUrl")
const bmColor=document.getElementById("bmColor")
const btnUploadIcon=document.getElementById("btnUploadIcon")
const previewIcon=document.getElementById("previewIcon")
const btnSaveBm=document.getElementById("btnSaveBm")
const btnCancelBm=document.getElementById("btnCancelBm")

const ctxMenu=document.getElementById("ctxMenu")
const ctxEdit=document.getElementById("ctxEdit")
const ctxMove=document.getElementById("ctxMove")
const ctxDelete=document.getElementById("ctxDelete")
const secretCode=document.getElementById("secretCode")
 
const quickAccessOverlay=document.getElementById("quickAccessOverlay")
const quickAccessMenu=document.getElementById("quickAccessMenu")
const quickAccessGrid=document.getElementById("quickAccessGrid")

const btnAddFolder = document.getElementById('btnAddFolder')
const folderViewMenu = document.getElementById('folderViewMenu')
const folderViewGrid = document.getElementById('folderViewGrid')
const folderViewTitle = document.getElementById('folderViewTitle')
const btnAddShortcutInFolder = document.getElementById('btnAddShortcutInFolder')
const folderLimitText = document.getElementById('folderLimitText')
const backToBookmarks = document.querySelector('.back-to-bookmarks')
const btnLock = document.getElementById("btnLock");
const addFolderMenu = document.getElementById('addFolderMenu')
const folderFormTitle = document.getElementById('folderFormTitle')
const folderName = document.getElementById('folderName')
const folderNameCount = document.getElementById('folderNameCount')
const folderColor = document.getElementById('folderColor')
const previewFolder = document.getElementById('previewFolder')
const btnSaveFolder = document.getElementById('btnSaveFolder')
const btnCancelFolder = document.getElementById('btnCancelFolder')
const backFromAddFolder = document.getElementById('backFromAddFolder')

const bmTextColor = document.getElementById("bmTextColor")
const folderTextColor = document.getElementById("folderTextColor")

const btnManageBookmarks = document.getElementById('btnManageBookmarks')
const manageButtons = document.getElementById('manageButtons')
const btnExportJSON = document.getElementById('btnExportJSON')
const btnImportJSON = document.getElementById('btnImportJSON')
const importFileInput = document.getElementById('importFileInput')
let manageButtonsVisible = false

let currentFolderId = null
let editingFolderId = null

let timer
let mode="search"
let history=JSON.parse(localStorage.getItem("searchHistory")||"[]")
let bookmarks = JSON.parse(localStorage.getItem("userBookmarks") || "[]")
let folders = JSON.parse(localStorage.getItem("userFolders") || "[]")
let historyIndex=-1
let savedInput="" 
let escapePressedOnce=false
let announceTimer
let tempIconImage = null
let editingIndex = -1
let ctxTargetIndex = -1
let moveMode = false
let moveSourceIndex = -1
let moveSourceType = null 
let originalFoldersOrder = null
let originalBookmarksOrder = null


const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
};

const setPassword = (updatedDate) => {
    localStorage.setItem("sitePasswordUpdated", updatedDate);
};

const getPassword = () => {
    return localStorage.getItem("sitePasswordUpdated") || "";
};

const deletePassword = () => {
    localStorage.removeItem("sitePasswordUpdated");
};

const checkAuth = async () => {
    const passwordOverlay = document.getElementById("passwordOverlay");
    const savedUpdated = getPassword();
    const mainInput = document.getElementById("input");

    const data = await fetchRemotePassword();

    if (data && savedUpdated === data.updated) {
        passwordOverlay.style.display = "none";
        if (mainInput) mainInput.disabled = false;
    } else {
        if (savedUpdated) {
            deletePassword();
        }
        passwordOverlay.style.display = "flex";
        if (mainInput) mainInput.disabled = true;
    }
};

let passwordCheckInterval = null;


const stopPasswordMonitoring = () => {
    if (passwordCheckInterval) {
        clearInterval(passwordCheckInterval);
        passwordCheckInterval = null;
    }
};


document.addEventListener("DOMContentLoaded", () => {
    const passwordOverlay = document.getElementById("passwordOverlay");
    const passwordInput = document.getElementById("passwordInput");
    const passwordSubmit = document.getElementById("passwordSubmit");
    const passwordError = document.getElementById("passwordError");
    
const handlePasswordSubmit = () => {
    const enteredPassword = passwordInput.value;
    const mainInput = document.getElementById("input");

    if (enteredPassword === CORRECT_PASSWORD) {
        setPassword(REMOTE_UPDATED);
        passwordOverlay.style.display = "none";
        passwordError.textContent = "";
        if (mainInput) mainInput.disabled = false;
    } else {
        passwordError.textContent = "Incorrect password. Please try again.";
        passwordInput.value = "";
    }
};
    passwordSubmit.addEventListener("click", handlePasswordSubmit);
    
    passwordInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            handlePasswordSubmit();
        }
    });
    
    checkAuth();
});



const savedBg=localStorage.getItem("bgImage")
if(savedBg) document.body.style.background=`url("${savedBg}") center/cover no-repeat`

const say=t=>{
    announce.textContent=t
    announce.classList.add("show")
    clearTimeout(announceTimer)
    announceTimer=setTimeout(()=>announce.classList.remove("show"),1200)
}

const saveHistory=v=>{
    if(!v) return
    if(history[0]===v) return
    history.unshift(v)
    history=history.slice(0,10)
    localStorage.setItem("searchHistory",JSON.stringify(history))
}

const show=()=>{
    box.classList.add("active")
    document.body.classList.add("cursor-active")
    document.title=mode==="search"?"Search Mode":"URL Mode"
    say(mode==="search"?"Search Mode":"URL Mode")
    reset()
}

const hide=()=>{
    if(menuOverlay.classList.contains("open")) return
    if(quickAccessOverlay.classList.contains("open")) return
    document.body.classList.remove("cursor-active")

    if(historyIndex !== -1){
        input.value = savedInput
        historyIndex = -1
        input.style.color = "#fff"
        restoreMode()
    }

    box.classList.remove("active")
    input.blur()
    document.title="New tab"
    document.body.classList.remove("cursor-active")

}

const reset=()=>{
    clearTimeout(timer)
    if(!menuOverlay.classList.contains("open") && !quickAccessOverlay.classList.contains("open")){
        timer=setTimeout(hide,2000)
    }
}

const restoreMode=()=>{
    document.title=mode==="search"?"Search Mode":"URL Mode"
    say(mode==="search"?"Search Mode":"URL Mode")
}

const closeAllMenus=()=>{
    menuOverlay.classList.remove("open")
    document.body.classList.remove("cursor-active")
    document.querySelectorAll(".menu-box").forEach(el=>el.classList.remove("active-menu"))
    secretCode.style.pointerEvents = "none"
    document.title="New tab"
    reset()
}

const openMenu=(menu)=>{
    document.querySelectorAll(".menu-box").forEach(el=>el.classList.remove("active-menu"))
    menuOverlay.classList.add("open")
    document.body.classList.add("cursor-active")
    menu.classList.add("active-menu")
    clearTimeout(timer)
    document.title="New tab"
    
    if(box.classList.contains("active")){
        box.classList.remove("active")
        input.blur()
    }
    
    if(menu === bookmarksMenu) renderBookmarks()
    
   
    if(menu === mainMenu) {
        secretCode.style.pointerEvents = "auto"
    } else {
        secretCode.style.pointerEvents = "none"
    }
}

const setupDragDrop = (element, onDropCallback) => {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        element.addEventListener(eventName, preventDefaults, false)
    })

    function preventDefaults(e) {
        e.preventDefault()
        e.stopPropagation()
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        element.addEventListener(eventName, () => element.classList.add('drag-active'), false)
    });

    ['dragleave', 'drop'].forEach(eventName => {
        element.addEventListener(eventName, () => element.classList.remove('drag-active'), false)
    })

    element.addEventListener('drop', (e) => {
        const dt = e.dataTransfer
        const files = dt.files
        if(files.length > 0 && files[0].type.startsWith('image/')) {
            onDropCallback(files[0])
        }
    })
}



 
setupDragDrop(btnChangeBg, (file) => {
    const reader = new FileReader()
    reader.onload = e => {
        localStorage.setItem("bgImage", e.target.result)
        document.body.style.background = `url("${e.target.result}") center/cover no-repeat`
        closeAllMenus()
    }
    reader.readAsDataURL(file)
})


setupDragDrop(previewIcon, (file) => {
    const reader = new FileReader()
    reader.onload = e => {
        tempIconImage = e.target.result
        updatePreview()
    }
    reader.readAsDataURL(file)
})



const MAX_BOOKMARKS = 12

const renderBookmarks = () => {
    bookmarksGrid.innerHTML = ""
    
  
    folders.forEach((folder, index) => {
        const div = document.createElement("div")
        div.className = "folder-item"
        
 div.innerHTML = `
    <div class="folder-icon" style="background-color: ${folder.color || '#333'}; color: ${folder.textColor || '#fff'};">${folder.name.charAt(0).toUpperCase()}</div>
    <div class="folder-name">${folder.name}</div>
`

        div.onclick = (e) => {
            if(moveMode) {
                
            } else {
                openFolder(folder.id)
            }
        }

        div.oncontextmenu = (e) => {
            e.preventDefault()
            if(moveMode) {
                
                folders = originalFoldersOrder
                bookmarks = originalBookmarksOrder
                localStorage.setItem("userFolders", JSON.stringify(folders))
                localStorage.setItem("userBookmarks", JSON.stringify(bookmarks))
                
                moveMode = false
                moveSourceIndex = -1
                moveSourceType = null
                originalFoldersOrder = null
                originalBookmarksOrder = null
                renderBookmarks()
                say("Cancelled")
                return
            }
            ctxTargetIndex = index
            ctxTargetType = 'folder'
            ctxMenu.style.display = "flex"
            ctxMenu.style.left = e.clientX + "px"
            ctxMenu.style.top = e.clientY + "px"
        }
        
       
        if(moveMode && moveSourceType === 'folder' && index === moveSourceIndex) {
            div.classList.add('moving-item')
        }

        bookmarksGrid.appendChild(div)
    })

    limitText.textContent = `${folders.length}/${MAX_BOOKMARKS}`
    
    if(folders.length >= MAX_BOOKMARKS) {
        btnAddFolder.style.display = "none"
    } else {
        btnAddFolder.style.display = "block"
    }
}

const renderFolderView = (folderId) => {
    const folder = folders.find(f => f.id === folderId)
    if (!folder) return
    
    folderViewTitle.textContent = folder.name
    folderViewGrid.innerHTML = ""
    
    const folderBookmarks = bookmarks.filter(bm => bm.folderId === folderId)
    
  folderBookmarks.forEach((bm, index) => {
    const div = document.createElement("div")
    div.className = "bookmark-item"
    
    let iconStyle = ""
    let iconText = ""

    if(bm.image) {
        iconStyle = `background-image: url('${bm.image}'); background-color: transparent;`
    } else {
        iconStyle = `background-color: ${bm.color || '#333'};`
        iconText = bm.name.charAt(0).toUpperCase()
    }

 div.innerHTML = `
    <div class="bookmark-icon" style="${iconStyle} color: ${bm.textColor || '#fff'};">${iconText}</div>
    <div class="bookmark-name">${bm.name}</div>
`

    div.onclick = (e) => {
        if(moveMode) {
          
        } else {
            window.open(bm.url, "_blank")
            closeAllMenus()
        }
    }

    div.oncontextmenu = (e) => {
        e.preventDefault()
        const globalIndex = bookmarks.findIndex(b => b.id === bm.id)
        ctxTargetIndex = globalIndex
        ctxTargetType = 'bookmark'
        ctxMenu.style.display = "flex"
        ctxMenu.style.left = e.clientX + "px"
        ctxMenu.style.top = e.clientY + "px"
    }
    
    
    const globalIndex = bookmarks.findIndex(b => b.id === bm.id)
    if(moveMode && moveSourceType === 'bookmark' && globalIndex === moveSourceIndex) {
        div.classList.add('moving-item')
    }

    folderViewGrid.appendChild(div)
})

    folderLimitText.textContent = `${folderBookmarks.length}/${MAX_BOOKMARKS}`
    
    if(folderBookmarks.length >= MAX_BOOKMARKS) {
        btnAddShortcutInFolder.style.display = "none"
    } else {
        btnAddShortcutInFolder.style.display = "block"
    }
}

const openFolder = (folderId) => {
    currentFolderId = folderId
    renderFolderView(folderId)
    openMenu(folderViewMenu)
}

const resetFolderForm = () => {
    editingFolderId = null
    folderFormTitle.textContent = "Add Folder"
    folderName.value = ""
    folderColor.value = "#333333"
    folderTextColor.value = "#ffffff"
    folderNameCount.textContent = "0/20"
    updateFolderPreview()
}

const updateFolderPreview = () => {
    previewFolder.style.backgroundColor = folderColor.value
    previewFolder.style.color = folderTextColor.value
    const name = folderName.value.trim()
    previewFolder.textContent = name.length > 0 ? name.charAt(0).toUpperCase() : ""
}
document.addEventListener("click", (e) => {
    if(!ctxMenu.contains(e.target)) {
        ctxMenu.style.display = "none"
    }
})

let ctxTargetType = 'bookmark' 

ctxDelete.addEventListener("click", () => {
    if(ctxTargetIndex !== -1) {
        if (ctxTargetType === 'folder') {
            if(confirm("Are you sure you want to delete this folder?")) {
                deleteFolder(ctxTargetIndex)
                ctxMenu.style.display = "none"
            }
        } else {
            if(confirm("Are you sure you want to delete this shortcut?")) {
                deleteBookmark(ctxTargetIndex)
                ctxMenu.style.display = "none"
            }
        }
    }
})

ctxEdit.addEventListener("click", () => {
    if(ctxTargetIndex !== -1) {
        if (ctxTargetType === 'folder') {
            editFolder(ctxTargetIndex)
        } else {
            editBookmark(ctxTargetIndex)
        }
        ctxMenu.style.display = "none"
    }
})



ctxMove.addEventListener("click", () => {
    if(ctxTargetIndex !== -1) {
        moveMode = true
        moveSourceIndex = ctxTargetIndex
        moveSourceType = ctxTargetType
        
    
        originalFoldersOrder = JSON.parse(JSON.stringify(folders))
        originalBookmarksOrder = JSON.parse(JSON.stringify(bookmarks))
        
        ctxMenu.style.display = "none"
        
        if (currentFolderId) {
            renderFolderView(currentFolderId)
        } else {
            renderBookmarks()
        }
        
        say("Use arrow keys to move, Enter to confirm, Esc to cancel")
    }
})

const editBookmark = (index) => {
    const bm = bookmarks[index]
    editingIndex = index
    shortcutFormTitle.textContent = "Edit Shortcut"
    
    bmName.value = bm.name
    bmUrl.value = bm.url
    bmColor.value = bm.color
    bmTextColor.value = bm.textColor || "#ffffff"
    tempIconImage = bm.image
    
    bmNameCount.textContent = `${bmName.value.length}/20`
    updatePreview()
    openMenu(addShortcutMenu)
}

const deleteBookmark = (index) => {
    bookmarks.splice(index, 1)
    localStorage.setItem("userBookmarks", JSON.stringify(bookmarks))
    
    if (currentFolderId) {
        renderFolderView(currentFolderId)
    } else {
        renderBookmarks()
    }
}

const deleteFolder = (index) => {
    const folder = folders[index]
    const hasBookmarks = bookmarks.some(bm => bm.folderId === folder.id)
    
    if (hasBookmarks) {
        if (!confirm("This folder contains bookmarks. Delete anyway?")) {
            return
        }
        
        bookmarks = bookmarks.filter(bm => bm.folderId !== folder.id)
        localStorage.setItem("userBookmarks", JSON.stringify(bookmarks))
    }
    
    folders.splice(index, 1)
    localStorage.setItem("userFolders", JSON.stringify(folders))
    renderBookmarks()
}

const editFolder = (index) => {
    const folder = folders[index]
    editingFolderId = folder.id
    folderFormTitle.textContent = "Edit Folder"
    
    folderName.value = folder.name
    folderColor.value = folder.color
    folderTextColor.value = folder.textColor || "#ffffff"
    
    folderNameCount.textContent = `${folderName.value.length}/20`
    updateFolderPreview()
    openMenu(addFolderMenu)
}

const resetBookmarkForm = () => {
    editingIndex = -1
    shortcutFormTitle.textContent = "Add Shortcut"
    bmName.value = ""
    bmUrl.value = ""
    bmColor.value = "#333333"
    bmTextColor.value = "#ffffff"
    tempIconImage = null
    bmNameCount.textContent = "0/20"
    updatePreview()
}

const updatePreview = () => {
    const val = bmName.value
    const char = val.length > 0 ? val.charAt(0).toUpperCase() : ""
    
    if (tempIconImage) {
        previewIcon.style.backgroundImage = `url('${tempIconImage}')`
        previewIcon.style.backgroundColor = "transparent"
        previewIcon.textContent = ""
    } else {
        previewIcon.style.backgroundImage = "none"
        previewIcon.style.backgroundColor = bmColor.value
        previewIcon.style.color = bmTextColor.value
        previewIcon.textContent = char
    }
}

const renderQuickAccess = () => {
    quickAccessGrid.innerHTML = ""
    
    
    folders.forEach((folder) => {
        const div = document.createElement("div")
        div.className = "quick-bookmark-item"
       div.innerHTML = `
    <div class="quick-folder-icon" style="background-color: ${folder.color || '#333'}; color: ${folder.textColor || '#fff'};">${folder.name.charAt(0).toUpperCase()}</div>
    <div class="quick-bookmark-name">${folder.name}</div>
`

        div.onclick = () => {
            closeQuickAccess()
            openFolder(folder.id)
            openMenu(folderViewMenu)
        }

        quickAccessGrid.appendChild(div)
    })
}

const openQuickAccess = () => {
    renderQuickAccess()
    quickAccessOverlay.classList.add("open")
    document.body.classList.add("cursor-active")
    
    if(box.classList.contains("active")){
        box.classList.remove("active")
        input.blur()
    }
}

const closeQuickAccess = () => {
    quickAccessOverlay.classList.remove("open")
    document.body.classList.remove("cursor-active")
}

const handleMoveNavigation = (moveRight) => {
    const itemsPerRow = 3;
    
    if (currentFolderId) {
      
        const folderBookmarks = bookmarks.filter(bm => bm.folderId === currentFolderId);
        const totalItems = folderBookmarks.length;
        
        
        const currentBookmark = bookmarks[moveSourceIndex];
        const localIndex = folderBookmarks.findIndex(bm => bm.id === currentBookmark.id);
        
        let newLocalIndex = localIndex;
        
        if (moveRight) {
            if (localIndex < totalItems - 1) {
                newLocalIndex = localIndex + 1;
            }
        } else {
            if (localIndex > 0) {
                newLocalIndex = localIndex - 1;
            }
        }
        
        if (newLocalIndex !== localIndex) {
            
            const targetBookmark = folderBookmarks[newLocalIndex];
            const targetGlobalIndex = bookmarks.findIndex(bm => bm.id === targetBookmark.id);
            
            [bookmarks[moveSourceIndex], bookmarks[targetGlobalIndex]] = 
            [bookmarks[targetGlobalIndex], bookmarks[moveSourceIndex]];
            
            moveSourceIndex = targetGlobalIndex;
            
            localStorage.setItem("userBookmarks", JSON.stringify(bookmarks));
            renderFolderView(currentFolderId);
        }
    } else {
       
        if (moveSourceType === 'folder') {
            const totalItems = folders.length;
            let newIndex = moveSourceIndex;
            
            if (moveRight) {
                if (moveSourceIndex < totalItems - 1) {
                    newIndex = moveSourceIndex + 1;
                }
            } else {
                if (moveSourceIndex > 0) {
                    newIndex = moveSourceIndex - 1;
                }
            }
            
            if (newIndex !== moveSourceIndex) {
                [folders[moveSourceIndex], folders[newIndex]] = 
                [folders[newIndex], folders[moveSourceIndex]];
                
                moveSourceIndex = newIndex;
                
                localStorage.setItem("userFolders", JSON.stringify(folders));
                renderBookmarks();
            }
        }
    }
}

quickAccessOverlay.addEventListener("click", (e) => {
    if(e.target === quickAccessOverlay) {
        closeQuickAccess()
    }
})

quickAccessMenu.querySelector('.close-menu').addEventListener("click", (e) => {
    e.stopPropagation()
    closeQuickAccess()
})



btnAddFolder.addEventListener("click", () => {
    resetFolderForm()
    openMenu(addFolderMenu)
})

btnAddShortcutInFolder.addEventListener("click", () => {
    resetBookmarkForm()
    openMenu(addShortcutMenu)
})

backToBookmarks.addEventListener("click", () => {
    currentFolderId = null
    openMenu(bookmarksMenu)
})

folderName.addEventListener("input", () => {
    const len = folderName.value.length
    folderNameCount.textContent = `${len}/20`
    updateFolderPreview()
})
folderColor.addEventListener("input", () => {
    updateFolderPreview()
})

folderTextColor.addEventListener("input", () => {
    updateFolderPreview()
})


btnSaveFolder.addEventListener("click", () => {
    const name = folderName.value.trim()
    
    if(!name) return alert("Please enter a folder name")
    
 const newFolder = {
    id: editingFolderId || Date.now().toString(),
    name: name,
    color: folderColor.value,
    textColor: folderTextColor.value
}
    
    if (editingFolderId) {
        const index = folders.findIndex(f => f.id === editingFolderId)
        folders[index] = newFolder
        editingFolderId = null
    } else {
        folders.push(newFolder)
    }
    
    localStorage.setItem("userFolders", JSON.stringify(folders))
    
    openMenu(bookmarksMenu)
})

btnCancelFolder.addEventListener("click", () => {
    openMenu(bookmarksMenu)
})

backFromAddFolder.addEventListener("click", () => {
    openMenu(bookmarksMenu)
})


btnManageBookmarks.addEventListener('click', () => {
    manageButtonsVisible = !manageButtonsVisible
    
    if (manageButtonsVisible) {
        manageButtons.classList.remove('manage-buttons-hidden')
        manageButtons.classList.add('manage-buttons-visible')
    } else {
        manageButtons.classList.remove('manage-buttons-visible')
        manageButtons.classList.add('manage-buttons-hidden')
    }
})



btnExportJSON.addEventListener('click', () => {
    const exportData = {
        version: "2.0",
        type: "bookmarks_with_folders",
        exported: new Date().toISOString(),
        folders: folders,
        bookmarks: bookmarks
    }
    
    const dataStr = JSON.stringify(exportData, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `bookmarks_${new Date().getTime()}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    
    say('Bookmarks exported successfully!')
})


btnImportJSON.addEventListener('click', () => {
    importFileInput.click()
})


importFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    if (!file) return
    
    const reader = new FileReader()
    reader.onload = (event) => {
        try {
            const importedData = JSON.parse(event.target.result)
            let foldersToImport = []
            let bookmarksToImport = []
            
           
            if (importedData.folders && importedData.bookmarks) {
                foldersToImport = importedData.folders
                bookmarksToImport = importedData.bookmarks
            }
           
            else if (importedData.bookmarks && Array.isArray(importedData.bookmarks)) {
                bookmarksToImport = importedData.bookmarks.map(bm => ({...bm, folderId: null}))
            }
            
            else if (Array.isArray(importedData)) {
                bookmarksToImport = importedData.map(bm => ({...bm, folderId: null}))
            }
            
            const availableFolderSlots = MAX_BOOKMARKS - folders.length
            
            if (foldersToImport.length > 0) {
                if (availableFolderSlots <= 0) {
                    say('Folder list is full!')
                    return
                }
                
                const toImportFolders = foldersToImport.slice(0, availableFolderSlots)
                folders = [...folders, ...toImportFolders.map(f => ({
                    id: f.id || Date.now().toString() + Math.random(),
                    name: f.name || 'Folder',
                    color: f.color || '#333333'
                }))]
                
                localStorage.setItem('userFolders', JSON.stringify(folders))
            }
            
            if (bookmarksToImport.length > 0) {
                bookmarks = [...bookmarks, ...bookmarksToImport.map(bm => ({
                    id: bm.id || Date.now().toString() + Math.random(),
                    name: bm.name || 'Bookmark',
                    url: bm.url || bm.href || 'https://google.com',
                    color: bm.color || '#333333',
                    image: bm.image || null,
                    folderId: bm.folderId || null
                }))]
                
                localStorage.setItem('userBookmarks', JSON.stringify(bookmarks))
            }
            
            renderBookmarks()
            
            say(`Imported ${foldersToImport.length} folder(s) and ${bookmarksToImport.length} bookmark(s)!`)
        } catch (error) {
            say('Error: Invalid JSON file')
            console.error(error)
        }
    }
    reader.readAsText(file)
    importFileInput.value = ''
})


function extractBookmarksFromBrowser(roots) {
    const bookmarks = []
    
    function traverse(node) {
        if (node.type === 'url' && node.url) {
            bookmarks.push({
                name: node.name || 'Bookmark',
                url: node.url,
                color: '#333333',
                image: null
            })
        }
        if (node.children) {
            node.children.forEach(child => traverse(child))
        }
    }
    
    Object.values(roots).forEach(root => traverse(root))
    return bookmarks
}


bmName.addEventListener("input", () => {
    const len = bmName.value.length
    bmNameCount.textContent = `${len}/20`  
    updatePreview()
})

bmColor.addEventListener("input", () => {
    tempIconImage = null
    updatePreview()
})

bmTextColor.addEventListener("input", () => {
    updatePreview()
})

btnUploadIcon.addEventListener("click", () => iconInput.click())
iconInput.addEventListener("change", () => {
    const file = iconInput.files[0]
    if(file){
        const reader = new FileReader()
        reader.onload = e => {
            tempIconImage = e.target.result
            updatePreview()
        }
        reader.readAsDataURL(file)
    }
})






btnSaveBm.addEventListener("click", () => {
    const name = bmName.value.trim()
    let url = bmUrl.value.trim()

    if(!name || !url) return alert("Please enter a name and URL")

    if(!/^https?:\/\//i.test(url)) {
        url = "https://" + url
    }

 const newBm = {
    id: editingIndex !== -1 ? bookmarks[editingIndex].id : Date.now().toString(),
    name: name,
    url: url,
    color: bmColor.value,
    textColor: bmTextColor.value,
    image: tempIconImage,
    folderId: currentFolderId
}

    if (editingIndex !== -1) {
        bookmarks[editingIndex] = newBm
        editingIndex = -1
    } else {
        bookmarks.push(newBm)
    }

    localStorage.setItem("userBookmarks", JSON.stringify(bookmarks))
    
    if (currentFolderId) {
        renderFolderView(currentFolderId)
        openMenu(folderViewMenu)
    } else {
        openMenu(bookmarksMenu)
    }
})

btnCancelBm.addEventListener("click", () => {
    if (currentFolderId) {
        openMenu(folderViewMenu)
    } else {
        openMenu(bookmarksMenu)
    }
})

backFromAdd.addEventListener("click", (e) => {
    e.stopPropagation()
    if (currentFolderId) {
        openMenu(folderViewMenu)
    } else {
        openMenu(bookmarksMenu)
    }
})


const engineChipLayer=document.getElementById("engineChipLayer")

let activeEngine=null

const ENGINE_MAP = {
    duck: {
        name: "DuckDuckGo",
        icon: "https://www.duckduckgo.com/favicon.ico",
        build: q => "https://www.duckduckgo.com/?q=" + encodeURIComponent(q),
        placeholder: "Search DuckDuckGo"
        
        
    },
    you: {
        name: "YouTube",
        icon: "https://www.youtube.com/favicon.ico",
        build: q => "https://www.youtube.com/results?search_query=" + encodeURIComponent(q),
        extra: "https://skipcut.com",
        placeholder: "Search YouTube"
    },
    red: {
        name: "Reddit",
        icon: "https://www.reddit.com/favicon.ico",
        build: q => "https://www.reddit.com/search/?q=" + encodeURIComponent(q),
        placeholder: "Search Reddit"
    },
    wiki: {
        name: "Wikipedia",
        icon: "https://en.wikipedia.org/static/favicon/wikipedia.ico",
        build: q => "https://en.wikipedia.org/wiki/Special:Search?search=" + encodeURIComponent(q),
        placeholder: "Search Wikipedia"
    },
    git: {
        name: "GitHub",
        icon: "https://github.githubassets.com/favicons/favicon.svg",
        build: q => "https://github.com/search?q=" + encodeURIComponent(q),
        placeholder: "Search GitHub"
    },
    ama: {
        name: "Amazon",
        icon: "https://www.amazon.com/favicon.ico",
        build: q => "https://www.amazon.com/s?k=" + encodeURIComponent(q),
        placeholder: "Search Amazon"
    },
    calc: {
        name: "Calculator",
        icon: "https://img.icons8.com/ios-filled/50/ffffff/math.png",
        build: q => q,
        placeholder: "Calculate"
    },
    con: {
        name: "Currency Con",
        icon: "https://img.icons8.com/ios-filled/50/ffffff/currency-exchange.png",
        build: q => q,
        placeholder: "Currency Converter"
    },

   
    bing: {
        name: "Bing",
        icon: "https://www.bing.com/favicon.ico",
        build: q => "https://www.bing.com/search?q=" + encodeURIComponent(q),
        placeholder: "Search Bing"
    },

    
    cop: {
        name: "Copilot",
        icon: "https://www.bing.com/favicon.ico",
        build: q => "https://copilot.microsoft.com/?q=" + encodeURIComponent(q),
        placeholder: "Ask Copilot"
    },
    gpt: {
        name: "ChatGPT",
        icon: "https://chat.openai.com/favicon.ico",
        build: q => "https://chat.openai.com/?q=" + encodeURIComponent(q),
        placeholder: "Ask ChatGPT"
    },
    gem: {
        name: "Gemini",
        icon: "https://www.google.com/favicon.ico",
        build: q => "https://gemini.google.com/app?q=" + encodeURIComponent(q),
        placeholder: "Ask Gemini"
    },
    cla: {
        name: "Claude",
        icon: "https://claude.ai/favicon.ico",
        build: q => "https://claude.ai/new?q=" + encodeURIComponent(q),
        placeholder: "Ask Claude"
    }
,
cmd: {
    name: "Command",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'><text x='4' y='18' font-size='18' font-family='monospace'>&gt;</text></svg>",
    build: q => q,
    placeholder: "Type a command"
}
 




}


const showEngineChip = k => {
    activeEngine = k
    engineChipLayer.innerHTML =
        `<div class="engine-chip">
            <img src="${ENGINE_MAP[k].icon}">
            <span>${ENGINE_MAP[k].name}</span>
        </div>`
    
   
    if(ENGINE_MAP[k].placeholder) {
        input.placeholder = ENGINE_MAP[k].placeholder
    }
    
    input.parentElement.classList.add("engine-active")
}

const clearEngineChip = () => {
    activeEngine = null
    engineChipLayer.innerHTML = ""
    input.parentElement.classList.remove("engine-active")
    

    input.placeholder = mode === "search" ? "Search" : "Search or type a URL"
}

menuBtn.addEventListener("click",()=>{
    openMenu(mainMenu)
})

closeButtons.forEach(btn=>{
    btn.addEventListener("click",closeAllMenus)
})

backButtons.forEach(btn=>{
    if(btn.id !== 'backFromAdd') {
        btn.addEventListener("click",()=>{
            openMenu(mainMenu)
        })
    }
})


backButtonForControls.forEach(btn=>{
    if(btn.id !== 'backFromAdd') {
        btn.addEventListener("click",()=>{
            openMenu(controlsMenu)
        })
    }
})


backButtonForInfo.forEach(btn=>{
    if(btn.id !== 'backFromAdd') {
        btn.addEventListener("click",()=>{
            openMenu(infoMenu)
        })
    }
})

backButtonForQuest.forEach(btn=>{
    if(btn.id !== 'backFromAdd') {
        btn.addEventListener("click",()=>{
            openMenu(questionsMenu)
        })
    }
})

btnChangeBg.addEventListener("click",()=>{
    bgInput.click()
})


btnEngines.addEventListener("click",()=>{
 

    engineList.innerHTML = ""
    
  
    Object.keys(ENGINE_MAP).forEach(key => {
        const eng = ENGINE_MAP[key]
        const div = document.createElement("div")
        div.className = "keybind-item"
        div.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <img src="${eng.icon}" style="width:16px; height:16px; border-radius:3px;">
                <span>${eng.name}</span>
            </div>
            <div class="keys"><span class="kbd">/${key}</span></div>
        `
        engineList.appendChild(div)
    })
 
     openMenu(enginesMenu)
})

btnInfo.addEventListener("click",()=>{
     openMenu(infoMenu)
})

btnQuest5.addEventListener("click",()=>{
     openMenu(quest5Menu )
})


btnControls.addEventListener("click",()=>{
     openMenu(controlsMenu)
})

btnQuest4.addEventListener("click",()=>{
     openMenu(quest4Menu)
})


btnCommands.addEventListener("click",()=>{
     openMenu(commandsMenu)
})

btnQuest1.addEventListener("click",()=>{
     openMenu(quest1Menu)
})

btnQuest2.addEventListener("click",()=>{
     openMenu(quest2Menu)
})

btnQuest3.addEventListener("click",()=>{
     openMenu(quest3Menu)
})


btnQuestions.addEventListener("click",()=>{
     openMenu(questionsMenu)
})

btnCredits.addEventListener("click",()=>{
     openMenu(creditsMenu)
})


btnKeybinds.addEventListener("click",()=>{
     openMenu(keybindsMenu)
})


btnBookmarks.addEventListener("click",()=>{
    openMenu(bookmarksMenu)
})


const SECRET_CODES = {
 
    "Vinden4554": () => { 
     window.location.href = "!/index.html"; 
     
    }, 


              
    
};



secretCode.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const code = secretCode.value.trim();
        
     
        if (code.toLowerCase().startsWith("change ")) {
            const newPassword = code.substring(7).trim();
            
            if (newPassword.length < 6) {
                alert("Password must be at least 6 characters");
                secretCode.value = "";
                return;
            }
            
          
            const instructions = `To change the password for everyone:

1. Open password.json file on GitHub
2. Change "password": "${CORRECT_PASSWORD}" to "password": "${newPassword}"
3. Commit the changes

Current password: ${CORRECT_PASSWORD}
New password: ${newPassword}

Copy the new password: ${newPassword}`;
            
            alert(instructions);
            
         
            navigator.clipboard.writeText(newPassword).catch(() => {});
            
            secretCode.value = "";
            return;
        }
        
    
        if (SECRET_CODES[code]) {
            SECRET_CODES[code](); 
            secretCode.value = "";
        }
    }
});


document.addEventListener("keydown", e => {

    if (document.getElementById("passwordOverlay").style.display === "flex") {
        return;
    }
    
    if (quickAccessOverlay.classList.contains("open")) {
        if (e.code === "Escape" || (e.shiftKey && e.code === "KeyB")) {
            e.preventDefault();
            closeQuickAccess();
        }
        return;
    }
  


    
    if (quickAccessOverlay.classList.contains("open")) {
        if (e.code === "Escape" || (e.shiftKey && e.code === "KeyB")) {
            e.preventDefault();
            closeQuickAccess();
        }
        return;
    }

if (menuOverlay.classList.contains("open")) {
    if (moveMode) {
      
        if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
            e.preventDefault();
            handleMoveNavigation(e.code === "ArrowRight");
            return;
        }
        
       
        if (e.code === "Enter") {
            e.preventDefault();
            moveMode = false;
            moveSourceIndex = -1;
            moveSourceType = null;
            originalFoldersOrder = null;
            originalBookmarksOrder = null;
            if (currentFolderId) {
                renderFolderView(currentFolderId);
            } else {
                renderBookmarks();
            }
            say("Moved!");
            return;
        }
        
       
        if (e.code === "Escape") {
            e.preventDefault();
            
         
            folders = originalFoldersOrder;
            bookmarks = originalBookmarksOrder;
            localStorage.setItem("userFolders", JSON.stringify(folders));
            localStorage.setItem("userBookmarks", JSON.stringify(bookmarks));
            
            moveMode = false;
            moveSourceIndex = -1;
            moveSourceType = null;
            originalFoldersOrder = null;
            originalBookmarksOrder = null;
            
            if (currentFolderId) {
                renderFolderView(currentFolderId);
            } else {
                renderBookmarks();
            }
            say("Cancelled");
            return;
        }
    }
    
    if (e.code === "Escape") {
        e.preventDefault();
        closeAllMenus();
    }
    return;
}

   
    if (!box.classList.contains("active") && document.activeElement !== secretCode) {
        if (e.shiftKey && e.code === "KeyB") {
            e.preventDefault();
            if (bookmarks.length > 0) {
                openQuickAccess();
            }
            return;
        }

        if (e.key.length === 1 || (e.code === "Space" && !e.shiftKey)) {
            e.preventDefault();
            const isSpace = e.code === "Space";
            const char = e.key;
            show();
            requestAnimationFrame(() => {
                input.focus();
                if (!isSpace) {
                    input.setRangeText(char, input.selectionStart, input.selectionEnd, "end");
                }
            });
            return;
        }
    }
  
    else if (box.classList.contains("active")) {

        
        if (e.code === "Backspace" && activeEngine && input.selectionStart === 0) {
            e.preventDefault();
            clearEngineChip();
            reset();
            return;
        }




if (!activeEngine) {
    const cmdMatch = input.value.match(/^>\s?$/)
    if (cmdMatch && e.key === " ") {
        e.preventDefault()
        input.value = ""
        showEngineChip("cmd")
        clearTimeout(timer)
        timer = setTimeout(hide, 5000)
        reset()
        return
    }
}



     
    
if (!activeEngine) {
const m = input.value.match(/^\/([a-z]{2,})\s?$/i);
if (m && ENGINE_MAP[m[1].toLowerCase()]) {


        if (e.code === "Space") {
            e.preventDefault();
        }

        const key = m[1].toLowerCase();
        input.value = "";
        showEngineChip(key);

        clearTimeout(timer);
        timer = setTimeout(hide, 5000);
        reset();
        return;
    }
}


       
        if (historyIndex !== -1 && (e.code === "ArrowUp" || e.code === "ArrowDown")) {
            historyIndex = -1;
            input.value = savedInput;
            input.style.color = "#fff";
            restoreMode();
            reset();
            return;
        }

        if (e.code === "Escape") {
            e.preventDefault();
            if (input.value) {
                input.value = "";
                historyIndex = -1;
                savedInput = "";
                input.style.color = "#fff";
                escapePressedOnce = true;
                restoreMode();
                reset();
            } else if (escapePressedOnce) {
                hide();
                escapePressedOnce = false;
            } else {
                escapePressedOnce = true;
                reset();
            }
            return;
        } else {
            escapePressedOnce = false;
        }

        if (e.shiftKey && e.code === "Space") {
            if (!activeEngine) {
                e.preventDefault();
                mode = mode === "search" ? "url" : "search";
                input.placeholder = mode === "search" ? "Search" : "Search or type a URL";
                restoreMode();
                reset();
            }
            return;
        }

       
        const inEngineMode = activeEngine && (activeEngine.type === "/m" || activeEngine.type === "/c");

       
        if (e.shiftKey && e.code === "ArrowLeft" && !inEngineMode && history.length) {
            e.preventDefault();
            if (historyIndex === -1) savedInput = input.value;
            historyIndex = Math.min(historyIndex + 1, history.length - 1);
            input.value = history[historyIndex];
            input.style.color = "rgba(255,255,255,0.6)";
            document.title = "History Mode";
            say("History Mode");
            reset();
            return;
        }

        
        if (historyIndex !== -1) {
            if (e.code === "ArrowLeft") {
                e.preventDefault();
                if (historyIndex < history.length - 1) {
                    historyIndex++;
                    input.value = history[historyIndex];
                    input.style.color = "rgba(255,255,255,0.6)";
                    document.title = "History Mode";
                    say("History Mode");
                }
                reset();
                return;
            } else if (e.code === "ArrowRight") {
                e.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    input.value = history[historyIndex];
                    input.style.color = "rgba(255,255,255,0.6)";
                    document.title = "History Mode";
                    say("History Mode");
                } else {
                    historyIndex = -1;
                    input.value = savedInput;
                    input.style.color = "#fff";
                    restoreMode();
                }
                reset();
                return;
            }
        }

        reset();
    }
});


 
input.addEventListener("input",()=>{
    historyIndex=-1
    input.style.color="#fff"
    restoreMode()
    reset()
})

clear.addEventListener("click",()=>{
    input.value=""
    input.focus()
    historyIndex=-1
    savedInput=""
    input.style.color="#fff"
    restoreMode()
    if(activeEngine) clearEngineChip() 
    reset()
})

bgInput.addEventListener("change",()=>{
    const file=bgInput.files[0]
    if(file){
        const reader=new FileReader()
        reader.onload=e=>{
            localStorage.setItem("bgImage",e.target.result)
            document.body.style.background=`url("${e.target.result}") center/cover no-repeat`
        }
        reader.readAsDataURL(file)
    }
    closeAllMenus()
})


const runCommand = (raw) => {
    const parts = raw.trim().toLowerCase().split(/\s+/)
    const cmd = parts[0]
    const args = parts.slice(1)

    switch (cmd) {
        case "background":
            bgInput.click()
            return true

        case "menu":
            openMenu(mainMenu)
            return true

        case "info":
            openMenu(infoMenu)
            return true

      case "quest5":
            openMenu(quest5Menu)
            return true

      case "bookmarks":
            openMenu(bookmarksMenu)
            return true

      case "keybinds":
            openMenu(keybindsMenu)
            return true

      case "controls":
            openMenu(controlsMenu)
            return true

        case "lock":
           lockNow()
            return true      

case "credits":
            openMenu(creditsMenu)
            return true
case "commands":
            openMenu(commandsMenu)
            return true

case "engines":
    engineList.innerHTML = ""
    
    
    Object.keys(ENGINE_MAP).forEach(key => {
        const eng = ENGINE_MAP[key]
        const div = document.createElement("div")
        div.className = "keybind-item"
        div.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <img src="${eng.icon}" style="width:16px; height:16px; border-radius:3px;">
                <span>${eng.name}</span>
            </div>
            <div class="keys"><span class="kbd">/${key}</span></div>
        `
        engineList.appendChild(div)
    })
 
     openMenu(enginesMenu)
            return true

case "questions":
            openMenu(questionsMenu)
            return true

case "quest1":
            openMenu(quest1Menu)
            return true


      case "quest2":
            openMenu(quest2Menu)
            return true

case "quest3":
            openMenu(quest3Menu)
            return true

      case "quest4":
            openMenu(quest4Menu)
            return true

      
        

        case "clear":
            history = []
            localStorage.removeItem("searchHistory")
            say("History cleared")
            return true


case "bookmark":
    
    if (args[0] === "folder") {
        if (args[1] === "add") {
            resetFolderForm()
            openMenu(addFolderMenu)
            return true
        }
        
        if (args[1] === "delete" && args[2]) {
            const folderName = args.slice(2).join(" ")
            const folderIndex = folders.findIndex(
                f => f.name.toLowerCase() === folderName.toLowerCase()
            )
            if (folderIndex !== -1) {
                if (confirm(`Delete folder "${folders[folderIndex].name}"?`)) {
                    deleteFolder(folderIndex)
                    say("Folder deleted")
                }
            } else {
                say("Folder not found")
            }
            return true
        }
        
        return false
    }
    
    
    if (args[0] === "add" && args[1]) {
        const folderName = args.slice(1).join(" ")
        const folder = folders.find(
            f => f.name.toLowerCase() === folderName.toLowerCase()
        )
        
        if (!folder) {
            say("Folder not found")
            return true
        }
        
        currentFolderId = folder.id
        resetBookmarkForm()
        openMenu(addShortcutMenu)
        return true
    }

   
    if (args[0] === "delete" && args[1]) {
        const name = args.slice(1).join(" ")
        const index = bookmarks.findIndex(
            b => b.name.toLowerCase() === name.toLowerCase()
        )
        if (index !== -1) {
            if (confirm(`Delete bookmark "${bookmarks[index].name}"?`)) {
                deleteBookmark(index)
                say("Bookmark deleted")
            }
        } else {
            say("Bookmark not found")
        }
        return true
    }

    
    if (args[0]) {
        const name = args.join(" ")
        const index = bookmarks.findIndex(
            b => b.name.toLowerCase() === name.toLowerCase()
        )

        if (index !== -1) {
            window.open(bookmarks[index].url, "_blank")
            say(`Opened bookmark "${bookmarks[index].name}"`)
        } else {
            say("Bookmark not found")
        }
        return true
    }

    return false

      
    }


}



 form.addEventListener("submit", async e => {
    e.preventDefault()
    const v = input.value.trim()
    if(!v) return

    saveHistory(v)
    historyIndex=-1
    savedInput=""
    input.style.color="#fff"

   
    if(activeEngine){
if (activeEngine === "cmd") {
    const handled = runCommand(v)
    input.value = ""
    clearEngineChip()
    hide()
    return
}

     
        if(activeEngine === "calc"){ 
            try {
                const result = eval(v)
                input.value = result
                input.select()
            } catch {
                input.value = "Invalid math"
                input.select()
            }
       } else if(activeEngine === "con"){
            const parts = v.trim().split(/\s+/)
            
            
            if(parts.length >= 3){
               
                const query = parts.join(" ") + " to "
                
              
                input.value = "Opening Google..."
                input.style.color = "#aaa" 
                
                
                window.open("https://www.google.com/search?q=" + encodeURIComponent(parts.join(" ") + " currency"), "_blank")
                
              
                setTimeout(() => {
                    input.value = ""
                    input.style.color = "#fff"
                    hide()
                }, 1000)

            } else {
                input.value = "Format: 12 USD SEK"
                input.select()
            }
        } else {
            window.open(ENGINE_MAP[activeEngine].build(v), "_blank")
            if(ENGINE_MAP[activeEngine].extra){
                setTimeout(()=>window.open(ENGINE_MAP[activeEngine].extra, "_blank"), 1000)
            }
            input.value = "";
            clearEngineChip()
        }

        
        reset() 
        return
    }

    
    if(mode==="url"){
        if(/^[a-zA-Z]+:\/\//.test(v)) window.open(v,"_blank")
        else if(v.includes(".")) window.open("https://"+v,"_blank")
        else window.open("https://www.google.com/search?q="+encodeURIComponent(v),"_blank")
    } else { 
        window.open("https://www.google.com/search?q="+encodeURIComponent(v),"_blank")
    }

input.value = ""
  
    hide()
})


const btnToggleSound = document.getElementById("btnToggleSound");
const soundStatus = document.getElementById("soundStatus");

if (btnToggleSound) {
    btnToggleSound.addEventListener("click", () => {
        const isEnabled = soundFX.toggle();
        soundStatus.textContent = isEnabled ? "ON" : "OFF";
        say(isEnabled ? "Sounds enabled" : "Sounds disabled");
    });
}

btnLock.addEventListener("click", () => {
   lockNow()
});


function lockNow() {
    if (confirm("Are you sure you want to lock the site? You'll need to enter the password again.")) {
        
        deletePassword();
        closeAllMenus();
        checkAuth();
    }
}


let deferredPrompt;
const installButton = document.getElementById('installButton');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installButton.classList.add('show');
});

installButton.addEventListener('click', async () => {
    if (!deferredPrompt) {
        return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to install prompt: ${outcome}`);
    deferredPrompt = null;
    installButton.classList.remove('show');
});

window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    installButton.classList.remove('show');
    deferredPrompt = null;
});

