const initialBooks = [
    { id: 28, title: "Alladin", price: 34.00, image: "https://ofarimbooks.co.il/wp-content/uploads/2020/11/Alladin.jpg", Rate: 0.},
    { id: 27, title: "Harry Poter" , price: 13.95, image: "https://simania.co.il/108x160/bookimages/covers75/758555.jpg" , Rate: 0.},
    { id: 26, title: "The Lord Of The Rings", price: 32.55, image: "https://www.seret.co.il/images/movies/LordOfTheRingsReturnOfTheKing/LordOfTheRingsReturnOfTheKing1.jpg" , Rate: 0.},
    { id: 25, title: "The Catcher in the Rye", price: 4.55 ,image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8b20nRn5c_dkODGSNkTgXjxwANUNU8V0Zg&s" , Rate: 0.},
    { id: 24, title: "Effective Modern C++", price: 12.00 ,image: "https://m.media-amazon.com/images/I/91i+g38v9eL._AC_UF1000,1000_QL80_.jpg", Rate: 0. },
    { id: 30, title: "The Hobbit", price: 48.00 ,image: "https://m.media-amazon.com/images/I/71jD4jMityL._AC_UF1000,1000_QL80_.jpg", Rate: 0. },
    { id: 12, title: "The Hitchhikers Guide to the Galaxy", price: 13.95 , image: "https://images.justwatch.com/poster/267988984/s718/the-hitchhikers-guide-to-the-galaxy.jpg" , Rate: 0. },
    { id: 29, title: "Lost horizon", price: 32.55 ,image: "https://upload.wikimedia.org/wikipedia/en/c/cc/Lost_Horizon_%28PC_video_game%29_boxart.jpg" , Rate: 0.},
    { id: 11, title: "The Godfather", price: 4.55, image: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg" , Rate: 0.},
    { id: 16, title: "The bell jar", price: 60.00 , image: "https://m.media-amazon.com/images/I/91163i7ah-L._AC_UF1000,1000_QL80_.jpg" , Rate: 0. },
    { id: 17, title: "God's Mountain", price: 34.00, image: "https://books.google.co.il/books/content?id=heXViwlSiGQC&hl=iw&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U2jAmyrlZejh-DRmg5Dtdg-piWCEw&w=1280" , Rate: 0.},
    { id: 13, title: "The dice man", price: 13.95, image: "https://m.media-amazon.com/images/I/81iFcqLuxLL._AC_UF894,1000_QL80_.jpg", Rate: 0. },
  ];
  
  if (!localStorage.getItem('books')) {
    localStorage.setItem('books', JSON.stringify(initialBooks));
  }
  
  function getBooks() {
    return JSON.parse(localStorage.getItem('books'));
  }
  
  function saveBooks(books) {
    localStorage.setItem('books', JSON.stringify(books));
  }
  