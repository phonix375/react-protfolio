import { v4 as uuidv4 } from "uuid";

function projects(){
    return[
       //pro trader
        {
            mainImage: "/img/portfolio/trade.jpg",
            secunderyImage: "/img/portfolio/trade1.png",
            title:"Pro-Trader",
            image: "/img/portfolio/trade.jpg",
            tags: ['HTML','CSS','Javascript'],
            id: uuidv4(),
            active: false,
            discription: `
            Link to app : <a href="https://phonix375.github.io/Pro-Trader/"> Pro Trader</a><br>
            User Story<br>
            AS a user with great interest in learning Stock Exchange Trading, I WANT to see my fictive personal portfolio worth based on real stock market prices and be able to trade (buy and sell) shares, on a same dynamic dashboard.<br>
            <br>
            Acceptance criterias<br>
            WHEN I open the app for the first time, THEN I am presented a form in which I will input my username and the amount of cash I'd like to invest in the simulator<br>
            WHEN I click on the "Sign In" button, THEN I will be presented with the main dashboard<br>
            WHEN I look at the main Dashboard for the first time, THEN I am will see a left side panel with actionable buttons, I will see my username, the amount of cash I invested, 2 empty tables "My Stocks", "My Transactions" and an empty chart<br>
            WHEN I click on the "Buy" button on the side left panel, THEN I am presented a modal with a form in which I can search for stocks symbol based on a company name and in which I can buy stocks with the corresponding quantity. The quantity will also prevent me from buying if I don't have enough money<br>
            WHEN I confirm the buy, the tables and amounts indicators on the main dashboard will be updated based on the current stock market prices<br>
            WHEN I click on the "Sell" button on the side left panel, THEN I am presented a modal with a form in which I select the stock to sell and the quantity to sell<br>
            WHEN I click on the button "Sell" to confirm the sell, THEN the tables and amounts indicators on the main dashboard will be updated based on the current stock market prices<br>
            WHEN I select a currency in the currency dropdown, THEN the whole dashboard will be converted to the selected currency (base currency is USD)<br>
            Built with<br>
            HTML, CSS, Javascript<br>
            Bootstrap 4, jQuery<br>
            Server side APIs:<br>
            AlphaVantage: https://www.alphavantage.co/<br>
            CurrencyAPI: https://currencyapi.net/<br>
            Chart.js, Moment.js<br>
            Collaboration tools<br>
            Github Kanban Project<br>
            Github Issues<br>
            Github branch, pull requests`

        },
        //react player
        {
            mainImage: "/img/portfolio/music.jpg",
            secunderyImage: "/img/portfolio/trade1.png",
            title:"React Player",
            image: "/img/portfolio/music.jpg",
            tags: ['React','HTML','CSS','Javascript'],
            id: uuidv4(),
            active: false,
            discription:''
        },
        //code review
        {
            mainImage: "/img/portfolio/code.jpg",
            secunderyImage: "/img/portfolio/trade1.png",
            title:"Code Review",
            image: "/img/portfolio/code.jpg",
            tags: ['React','HTML','CSS','Javascript'],
            id: uuidv4(),
            active: false,
            discription:`Description<br>
            This is a platform to connect people that want help with their projects to people with expertise. Experienced developers can sign up to this platform to help individuals with their issues and make some money while doing so!
            <br>
            Home Page<br>
            <br>
            Deployed App Link<br>
            <a href="https://fast-beach-15102.herokuapp.com/" target=”_blank”>Heroku</a><br>
            <br>
            
            Usage
            This project was built using the MERN stack
            
            Dependencies
            Front End
            React
            Bootstrap
            GraphQL
            Apollo
            JWT
            Sass
            FontAwesome
            Material UI
            React Router
            Stripe
            Back End
            Apollo
            BCrypt
            Dotenv
            Express
            GraphQL
            JWT
            Mongoose`
        },
        //redux 
        {
            mainImage: "/img/portfolio/shop2.jpg",
            secunderyImage: "/img/portfolio/trade1.png",
            title:"Redux Store",
            image: "/img/portfolio/shop2.jpg",
            tags: ['React','HTML','CSS','Javascript'],
            id: uuidv4(),
            active: false,
            discription:''
        },
        //shop shop
        {
            mainImage: "/img/portfolio/shop.jpg",
            secunderyImage: "/img/portfolio/trade1.png",
            title:"Shop Shop",
            image: "/img/portfolio/shop.jpg",
            tags: ['React','HTML','CSS','Javascript'],
            id: uuidv4(),
            active: false,
            discription:''
        },
        //deep thoughts
        {
            mainImage: "/img/portfolio/social.jpg",
            secunderyImage: "/img/portfolio/trade1.png",
            title:"Deep Thoughts",
            image: "/img/portfolio/social.jpg",
            tags: ['React','HTML','CSS','Javascript'],
            id: uuidv4(),
            active: false,
            discription:''
        },
        //pizza hunt
        {
            mainImage: "/img/portfolio/pizza.jpg",
            secunderyImage: "/img/portfolio/trade1.png",
            title:"Pizza Hunt",
            image: "/img/portfolio/pizza.jpg",
            tags: ['React','HTML','CSS','Javascript'],
            id: uuidv4(),
            active: false,
            discription:''
        },
        {
            mainImage: "/img/portfolio/budget.jpg",
            secunderyImage: "/img/portfolio/trade1.png",
            title:"Budget Trucker",
            image: "/img/portfolio/budget.jpg",
            tags: ['React','HTML','CSS','Javascript'],
            id: uuidv4(),
            active: false,
            discription:''
        },
        {
            mainImage: "/img/portfolio/game.jpg",
            secunderyImage: "/img/portfolio/trade1.png",
            title:"Opinion Guess",
            image: "/img/portfolio/game.jpg",
            tags: ['React','HTML','CSS','Javascript'],
            id: uuidv4(),
            active: false,
            discription:''
        },
        {
            mainImage: "/img/portfolio/news.jpg",
            secunderyImage: "/img/portfolio/trade1.png",
            title:"Just Tech News",
            image: "/img/portfolio/news.jpg",
            tags: ['React','HTML','CSS','Javascript'],
            id: uuidv4(),
            active: false,
            discription:''
        },
        {
            mainImage: "/img/portfolio/notes.jpg",
            secunderyImage: "/img/portfolio/trade1.png",
            title:"Notes",
            image: "/img/portfolio/notes.jpg",
            tags: ['React','HTML','CSS','Javascript'],
            id: uuidv4(),
            active: false,
            discription:''
        },
    ]
}

export default projects;