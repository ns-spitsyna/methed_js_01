'use strict';

{
    const getListIPv4Unique = (arr) => {
        return (Array.from(new Set(arr))).length;
    }

    console.log(getListIPv4Unique(listIPv4));
}