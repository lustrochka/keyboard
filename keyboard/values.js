const values = [
    {
        "code": "Backquote",
        "bel": "ё", 
        "belCaps": "Ё", 
        "eng": "`",
        "engCaps": "~"
    }, 
    {
        "code": "Digit1",
        "bel": "1", 
        "belCaps": "!", 
        "eng": "1",
        "engCaps": "!"
    },  
    {
        "code": "Digit2",
        "bel": "2", 
        "belCaps": "\"", 
        "eng": "2",
        "engCaps": "@"
    }, 
    {
        "code": "Digit3",
        "bel": "3", 
        "belCaps": "№", 
        "eng": "3",
        "engCaps": "#"
    },  
    {
        "code": "Digit4",
        "bel": "4", 
        "belCaps": ";", 
        "eng": "4",
        "engCaps": "$"
    }, 
    {
        "code": "Digit5",
        "bel": "5", 
        "belCaps": "%", 
        "eng": "5",
        "engCaps": "%"
    },  
    {
        "code": "Digit6",
        "bel": "6", 
        "belCaps": ":", 
        "eng": "6",
        "engCaps": "^"
    },  
    {
        "code": "Digit7",
        "bel": "7", 
        "belCaps": "?", 
        "eng": "7",
        "engCaps": "&"
    }, 
    {
        "code": "Digit8",
        "bel": "8", 
        "belCaps": "*", 
        "eng": "8",
        "engCaps": "*"
    },  
    {
        "code": "Digit9",
        "bel": "9", 
        "belCaps": "(", 
        "eng": "9",
        "engCaps": "("
    }, 
    {
        "code": "Digit0",
        "bel": "0", 
        "belCaps": ")", 
        "eng": "0",
        "engCaps": ")"
    },
    {
        "code": "Minus",
        "bel": "-", 
        "belCaps": "_", 
        "eng": "-",
        "engCaps": "_"
    },   
    {
        "code": "Equal",
        "bel": "=", 
        "belCaps": "+", 
        "eng": "=",
        "engCaps": "+"
    }, 
    {
        "code": "Backspace",
        "bel": "Backspace", 
        "belCaps": "Backspace", 
        "eng": "Backspace",
        "engCaps": "Backspace",
        "special": "True"
    }, 
    {
        "code": "Tab",
        "bel": "Tab", 
        "belCaps": "Tab", 
        "eng": "Tab",
        "engCaps": "Tab",
        "special": "True"
    }, 
    {
        "code": "KeyQ",
        "bel": "й", 
        "belCaps": "Й", 
        "eng": "q",
        "engCaps": "Q"
    }, 
    {
        "code": "KeyW",
        "bel": "ц", 
        "belCaps": "Ц", 
        "eng": "w",
        "engCaps": "W"
    },
    {
        "code": "KeyE",
        "bel": "у", 
        "belCaps": "У", 
        "eng": "e",
        "engCaps": "E"
    },
    {
        "code": "KeyR",
        "bel": "к", 
        "belCaps": "К", 
        "eng": "r",
        "engCaps": "R"
    },
    {
        "code": "KeyT",
        "bel": "е", 
        "belCaps": "Е", 
        "eng": "t",
        "engCaps": "T"
    },
    {
        "code": "KeyY",
        "bel": "н", 
        "belCaps": "Н", 
        "eng": "y",
        "engCaps": "Y"
    },
    {
        "code": "KeyU",
        "bel": "г", 
        "belCaps": "Г", 
        "eng": "u",
        "engCaps": "U"
    },
    {
        "code": "KeyI",
        "bel": "ш", 
        "belCaps": "Ш", 
        "eng": "i",
        "engCaps": "I"
    },
    {
        "code": "KeyO",
        "bel": "ў", 
        "belCaps": "Ў", 
        "eng": "o",
        "engCaps": "O"
    },
    {
        "code": "KeyP",
        "bel": "з", 
        "belCaps": "З", 
        "eng": "p",
        "engCaps": "P"
    },
    {
        "code": "BracketLeft",
        "bel": "х", 
        "belCaps": "Х", 
        "eng": "[",
        "engCaps": "{"
    },
    {
        "code": "BracketRight",
        "bel": "'", 
        "belCaps": "'", 
        "eng": "]",
        "engCaps": "}"
    },
    {
        "code": "Backslash",
        "bel": "Tab", 
        "belCaps": "Tab", 
        "eng": "\\",
        "engCaps": "|"
    },
    {
        "code": "Delete",
        "bel": "Del", 
        "belCaps": "Del", 
        "eng": "Del",
        "engCaps": "Del",
        "special": "True"
    },
    {
        "code": "CapsLock",
        "bel": "CapsLock", 
        "belCaps": "CapsLock", 
        "eng": "CapsLock",
        "engCaps": "CapsLock",
        "special": "True"
    },
    {
        "code": "KeyA",
        "bel": "ф", 
        "belCaps": "Ф", 
        "eng": "a",
        "engCaps": "A"
    },
    {
        "code": "KeyS",
        "bel": "ы", 
        "belCaps": "Ы", 
        "eng": "s",
        "engCaps": "S"
    },
    {
        "code": "KeyD",
        "bel": "в", 
        "belCaps": "В", 
        "eng": "d",
        "engCaps": "D"
    },
    {
        "code": "KeyF",
        "bel": "а", 
        "belCaps": "А", 
        "eng": "f",
        "engCaps": "F"
    },
    {
        "code": "KeyG",
        "bel": "п", 
        "belCaps": "П", 
        "eng": "g",
        "engCaps": "G"
    },
    {
        "code": "KeyH",
        "bel": "р", 
        "belCaps": "Р", 
        "eng": "h",
        "engCaps": "H"
    },
    {
        "code": "KeyJ",
        "bel": "о", 
        "belCaps": "О", 
        "eng": "j",
        "engCaps": "J"
    },
    {
        "code": "KeyK",
        "bel": "л", 
        "belCaps": "Л", 
        "eng": "k",
        "engCaps": "K"
    },
    {
        "code": "KeyL",
        "bel": "ж", 
        "belCaps": "Ж", 
        "eng": "l",
        "engCaps": "L"
    },
    {
        "code": "Semicolon",
        "bel": "э", 
        "belCaps": "Э", 
        "eng": ";",
        "engCaps": ":"
    },
    {
        "code": "Quote",
        "bel": "э", 
        "belCaps": "Э", 
        "eng": "'",
        "engCaps": "\""
    },
    {
        "code": "Enter",
        "bel": "Enter", 
        "belCaps": "Enter", 
        "eng": "Enter",
        "engCaps": "Enter",
        "special": "True"
    },
    {
        "code": "ShiftLeft",
        "bel": "Shift", 
        "belCaps": "Shift", 
        "eng": "Shift",
        "engCaps": "Shift",
        "special": "True"
    },
    {
        "code": "KeyZ",
        "bel": "я", 
        "belCaps": "Я", 
        "eng": "z",
        "engCaps": "Z"
    },
    {
        "code": "KeyX",
        "bel": "ч", 
        "belCaps": "Ч", 
        "eng": "x",
        "engCaps": "X"
    },
    {
        "code": "KeyC",
        "bel": "с", 
        "belCaps": "С", 
        "eng": "c",
        "engCaps": "C"
    },
    {
        "code": "KeyV",
        "bel": "м", 
        "belCaps": "М", 
        "eng": "v",
        "engCaps": "V"
    },
    {
        "code": "KeyB",
        "bel": "і", 
        "belCaps": "І", 
        "eng": "b",
        "engCaps": "B"
    },
    {
        "code": "KeyN",
        "bel": "т", 
        "belCaps": "Т", 
        "eng": "n",
        "engCaps": "N"
    },
    {
        "code": "KeyM",
        "bel": "ь", 
        "belCaps": "Ь", 
        "eng": "m",
        "engCaps": "M"
    },
    {
        "code": "Comma",
        "bel": "б", 
        "belCaps": "Б", 
        "eng": ",",
        "engCaps": "<"
    },
    {
        "code": "Period",
        "bel": "ю", 
        "belCaps": "Ю", 
        "eng": ".",
        "engCaps": ">"
    },
    {
        "code": "Slash",
        "bel": ".", 
        "belCaps": ",", 
        "eng": "/",
        "engCaps": "?"
    },
    {
        "code": "ArrowUp",
        "bel": "▲", 
        "belCaps": "▲", 
        "eng": "▲",
        "engCaps": "▲"
    },
    {
        "code": "ShiftRight",
        "bel": "Shift", 
        "belCaps": "Shift", 
        "eng": "Shift",
        "engCaps": "Shift",
        "special": "True"
    },
    {
        "code": "ControlLeft",
        "bel": "Ctrl", 
        "belCaps": "Ctrl", 
        "eng": "Ctrl",
        "engCaps": "Ctrl",
        "special": "True"
    },
    {
        "code": "MetaLeft",
        "bel": "Win", 
        "belCaps": "Win", 
        "eng": "Win",
        "engCaps": "Win",
        "special": "True"
    },
    {
        "code": "AltLeft",
        "bel": "Alt", 
        "belCaps": "Alt", 
        "eng": "Alt",
        "engCaps": "Alt",
        "special": "True"
    },
    {
        "code": "Space",
        "bel": "Space", 
        "belCaps": "Space", 
        "eng": "Space",
        "engCaps": "Space",
        "special": "True"
    },
    {
        "code": "AltRight",
        "bel": "Alt", 
        "belCaps": "Alt", 
        "eng": "Alt",
        "engCaps": "Alt",
        "special": "True"
    },
    {
        "code": "ArrowLeft",
        "bel": "◄", 
        "belCaps": "◄", 
        "eng": "◄",
        "engCaps": "◄"
    },
    {
        "code": "ArrowDown",
        "bel": "▼", 
        "belCaps": "▼", 
        "eng": "▼",
        "engCaps": "▼"
    },
    {
        "code": "ArrowRight",
        "bel": "►", 
        "belCaps": "►", 
        "eng": "►",
        "engCaps": "►"
    },
    {
        "code": "ControlRight",
        "bel": "Ctrl", 
        "belCaps": "Ctrl", 
        "eng": "Ctrl",
        "engCaps": "Ctrl",
        "special": "True"
    },
]

export default values;