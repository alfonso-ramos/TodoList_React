import React from "react"

// CustomHook para el localStorage
// Recibe como parametros el nombre y el estado incial
function useLocalStorage(itemName, initialValue) {

    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue)

    React.useEffect(() => {
        setTimeout(() => {
            // Se guarda el item en una constante
            const localStorageItem = localStorage.getItem(itemName)
            let parsedItem;

            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            } else {
                parsedItem = JSON.parse(localStorageItem)
            }

            setItem(parsedItem);
            setLoading(false)
        }, 1500)
    })

    const saveItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItem)
        setItem(newItem)
    }

    return {
        item,
        saveItem,
        loading,
    };
}

export {useLocalStorage}
