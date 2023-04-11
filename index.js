const bookReview = (book, rating) => {
    if (rating < 3){
        return `${book} is terrible!`
    } else if (rating === 3){
        return `${book} is mediocre.`
    } else if (rating > 3 && rating <=4){
        return `${book} is pretty good.`
    } else {
        return `${book} is phenomenal.`
    }
}

function receivesAFunction(bookReview, book, rating){
    bookReview(book, rating);
}


function returnsANamedFunction(){
    return receivesAFunction;
}

function returnsAnAnonymousFunction(){
    return book => `You should review ${book}.`
}