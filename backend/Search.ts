import { fetchSideBar, fetchSideBarById } from "./StrapiService";

export const getKeywords = async () => {
    const responseData = await fetchSideBar()
    const totalCollection = responseData.meta.pagination.total;
    type Term = string
    type Link = string
    let keyWords:[Term, Link][] = [];

    const checkKeyword = (collection: typeof keyWords, termToCheck: Term): boolean => {
        if (collection.some(([term]) => term === termToCheck)) {
            return true
        } else {
            return false
        }
      };

    for (let i = 1; i <= totalCollection; i++ ) {
        const collection = await fetchSideBarById(i)
        const keyWordCandidate = collection.data.attributes.SideBarItem

        keyWordCandidate.forEach((item:any) => {
            if (item.__component === "side.side-button" && item.SideTitleIn && item.Link && item.Link !== '#') {
                const newTerm: Term = item.sideTitleIn

                if (checkKeyword(keyWords,newTerm) === false) {
                    const newRecord: [Term, Link] = [item.SideTitleIn, item.Link];
                    keyWords.push(newRecord);
                }
                
            }
            if (item.__component === "side.option-bagian" && item.Title && item.Link && item.Link !== '#') {
                const newTerm: Term = item.Title

                if (checkKeyword(keyWords,newTerm) === false) {
                    const newRecord: [Term, Link] = [item.Title, item.Link];
                    keyWords.push(newRecord);
                }
              }
            if (item.__component === "side.side-nav" && item.Items.items) {
                item.Items.items.forEach((subItem:any) => {
                    if (subItem.link && subItem.link !== '#' && subItem.mainText) {
                        const newTerm: Term = subItem.mainText

                        if (checkKeyword(keyWords,newTerm) === false) {
                            const newRecord: [Term, Link] = [subItem.mainText, subItem.link];
                            keyWords.push(newRecord);
                        }
                    }
                    if (subItem.dropdown) {
                        subItem.dropdown.forEach((dropdownItem:any) => {
                            if (dropdownItem.link && dropdownItem.link !== "#" && dropdownItem.mainText) {
                                const newTerm: Term = dropdownItem.mainText
        
                                if (checkKeyword(keyWords,newTerm) === false) {
                                    const newRecord: [Term, Link] = [dropdownItem.mainText, dropdownItem.link];
                                    keyWords.push(newRecord);
                                }
                            }
                        })
                    }
                })
            }
          });
    }
    return keyWords
}