function each(elements, callback) {
    for (var i = 0; i < elements.length; i++) {
        callback(i, elements[i])
    }
}

var mangaData = [
    {
        name: "Naruto",
        img: "https://wallpapers-clan.com/wp-content/uploads/2024/04/anime-naruto-uzumaki-using-abilities-desktop-wallpaper-cover.jpg",
        description: "Naruto (ナルト?) is a shōnen manga written and illustrated by Masashi Kishimoto. Naruto was serialized in the weekly Shōnen Jump by the publisher Shūeisha between September 1999 and November 2014. The series was compiled into 72 volumes. The French version of the manga was published by Kana between March 2002 and November 2016.",
        price: "$20"
    },
    {
        name: "Solo Leveling",
        img: "https://tse3.mm.bing.net/th?id=OIP.09dLWZb0RQGIQDCv9TN1MgHaEK&pid=Api&P=0&h=180",
        description: "Solo Leveling (Hangul: 나 혼자만 레벨업; RR: Na honjaman lebel-eob) is a South Korean web novel series written by Chugong and published online on KakaoPage1 before being published by D&C Media under its Papyrus publishing imprint2. The series consists of 270 chapters spread across 17 volumes.",
        price: "$25"
    },
    {
        name: "Tkoyo Ghoul",
        img: "https://wallpapers-clan.com/wp-content/uploads/2024/12/kaneki-ken-half-ghoul-red-glow-desktop-wallpaper-cover.jpg",
        description: "Tokyo Ghoul (東京喰種トーキヨーグール, Tōkyō Gūru?) is a seinen manga by Sui Ishida pre-published in the magazine Weekly Young Jump of the publisher Shūeisha. The first part, Tokyo Ghoul, was published from 2011 to 2014 and was compiled into 14 bound volumes. The second part, Tokyo Ghoul:re (東京喰種トーキヨーグール:re?), was published between 2014 and 2018 in Japan. The French version has been published by Glénat Manga since August 2013.",
        price: "$20"
    },
    {
        name: "Jujutsu Kaisen",
        img: "https://wallpapers-clan.com/wp-content/uploads/2024/11/jjk-yuji-itadori-curse-red-black-horror-desktop-wallpaper-cover.jpg",
        description: "Jujutsu Kaisen (呪術廻戦じゅじゅつかいせん?, lit. “Witchcraft Fight”) is a shōnen manga by Gege Akutami, pre-published in Weekly Shōnen Jump magazine between March 2018 and September 2024 and published by publisher Shūeisha in bound volumes. The French version is published by Ki-oon.",
        price: "$20"
    },
    {
        name: "Demon Slayer",
        img: "https://wallpapers-clan.com/wp-content/uploads/2024/09/demon-slayer-tanjiro-kamado-water-breathing-desktop-wallpaper-cover.jpg",
        description: "Demon Slayer (lit.), known in Japan as Kimetsu no yaiba (鬼き滅めつの刃やいば?, lit. ), is a manga series written and illustrated by manga artist Koyoharu Gotōge. The story follows the journey of Tanjirō Kamado as he searches for a way to make his little sister Nezuko human again after she is transformed into a demon.",
        price: "$25"
    },
    {
        name: "Death Note",
        img: "https://wallpapers-clan.com/wp-content/uploads/2024/10/ryuk-death-note-shinigami-apple-desktop-wallpaper-cover.jpg",
        description: "Death Note (デスノート, Desu Nōto?, literally Death Note) is a manga written by Tsugumi Ōhba and illustrated by Takeshi Obata. It was serialized in Weekly Shōnen Jump magazine from December 2003 to May 2006, and subsequently published in twelve tankōbon, from May 2004 to October 2006, by Shūeisha. The French version was published by Kana from January 2007 to October 2008..",
        price: "$15"
    },
    {
        name: "Hunter X Hunter",
        img: "https://images3.alphacoders.com/135/thumbbig-1353834.webp",
        description: "Hunter × Hunter (ハンター×ハンター, Hantā × Hantā?, lit. , often abbreviated HxH) is a manga written and drawn by Yoshihiro Togashi. It has been pre-published since March 1998 in the weekly Shōnen Jump of the publisher Shūeisha, and is compiled in thirty-eight volumes. The French version is published by Kana editions.",
        price: "$18"
    },
    {
        name: "One Piece",
        img: "https://images5.alphacoders.com/139/thumb-440-1391452.webp",
        description: "One Piece (ワンピース, Wan Pīsu?) is a shōnen manga series created by Eiichirō Oda. It has been pre-published since July 22, 1997 in the weekly magazine Weekly Shōnen Jump, then grouped into tankōbon by Shūeisha since December 24, 1997. 110 volumes are marketed in Japan in November 2024.",
        price: "$23"
    },
    {
        name: "Attack on Titan",
        img: "https://wallpapers-clan.com/wp-content/uploads/2024/10/eren-yeager-titan-fiery-rage-desktop-wallpaper-cover.jpg",
        description: "Attack on Titan (進撃の巨人, Shingeki no Kyojin?, lit. The Attacking Giant, often abbreviated SnK), also known by the English title Attack on Titan, is a shōnen manga written and drawn by Hajime Isayama. It was pre-published between September 2009 and April 2021 in the magazine Bessatsu Shōnen Magazine and then compiled into thirty-four bound volumes by the publisher Kōdansha. The French version was published in its entirety by Pika Édition in the seinen collection between June 2013 and October 2021.",
        price: "$25"
    },
    {
        name: "Dragon Ball",
        img: "https://wallpapers-clan.com/wp-content/uploads/2024/11/dragon-ball-super-goku-super-saiyan-blue-desktop-wallpaper-cover.jpg",
        description: "Dragon Ball (ドラゴンボール, Doragon Bōru?, litt. Dragon Ball) est un manga d'Akira Toriyama prépublié dans le magazine Weekly Shōnen Jump du 20 novembre 1984 au 23 mai 1995 et édité par Shūeisha en 42 volumes reliés du 10 septembre 1985 au 4 août 1995. Glénat publie l'édition française depuis février 1993.",
        price: "$20"
    }
    
];
$(document).ready(function () {
    each(mangaData, function (index, manga) {
        var card = 
            '<div class="card">' +
                '<img src="' + manga.img + '" alt="' + manga.name + '" class="product-img" />' +
                '<h3>' + manga.name + '</h3>' +
                '<p>' + manga.price + '</p>' +
                '<button class="add-to-cart" data-name="' + manga.name + '" data-price="' + manga.price + '" data-img="' + manga.img + '" data-description="' + manga.description + '">Add to Cart</button>' +
            '</div>';
        $('.gallery').append(card);
    })
    $(document).on('click', '.add-to-cart', function () {
        var productName = $(this).data('name');
        var productPrice = $(this).data('price');
        var productImage = $(this).data('img');
        var productDescription = $(this).data('description');

        var cartItem = 
            '<li class="cart-item">' +
                '<img src="' + productImage + '" alt="' + productName + '" width="50px" />' +
                '<span>' + productName + '</span>' +
                '<span>' + productPrice + '</span>' +
                '<button class="remove-from-cart">Remove</button>' +
            '</li>';

        $('#cart-items').append(cartItem)
    })

    $(document).on('click', '.remove-from-cart', function () {
        $(this).closest('.cart-item').remove()
    })
    $('#search').keyup(function () {
        var searchQuery = $(this).val().toLowerCase()

        each($('.card'), function (index, card) {
            var productName = $(card).find('h3').text().toLowerCase()
            if (productName.indexOf(searchQuery) !== -1) {
                $(card).show()
            } else {
                $(card).hide()
            }
        })
    })
    $(document).on('click', '.product-img', function () {
        var mangaName = $(this).closest('.card').find('h3').text()
        var mangaDescription = $(this).closest('.card').find('.add-to-cart').data('description')
        alert(mangaName + ": " + mangaDescription)
    })
})
