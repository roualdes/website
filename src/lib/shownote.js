export function showNote(x, searchval) {
    if (searchval === "") {
        return true;
    }
    
    for (const tag of x.tags) {
        if (tag.includes(searchval)) {
            return true;
        }
    }

    if (x.note.toLowerCase().includes(searchval.toLowerCase())) {
        return true;
    }

    return false;
}
