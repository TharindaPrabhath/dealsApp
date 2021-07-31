interface Game{
    title: string;
    thumbnail: string;
    releaseDate: number;
    normalPrice: string;
    salePrice: string;
    discount: string;
    storeID: string;
    dealID: string;             // To redirect for the relevant store site
    metacriticScore: string;
}

export default Game;

export const sampleGame: Game[] = [
    {
        title: "Order of War",
        thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/34600/capsule_sm_120.jpg?t=1592493041",
        releaseDate: 1253577600,
        normalPrice: "7.99",
        salePrice: "1.19",
        discount: "85",
        storeID: "",
        dealID: "",
        metacriticScore: "69"
    }
]