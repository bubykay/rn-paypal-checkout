const express = require('express')
const engine = require('consolidate')
const bodyParser = require('body-parser')
const paypal = require('paypal-rest-sdk')

const app = express()

app.engine('ejs', engine.ejs)
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(bodyParser.text())

paypal.configure({
    mode: "sandbox", //sandbox or live
    client_id:
        "AUT4ur-gvNSPnrtqT5vWeSVU09AoyDH5hjWv0fsbcyVFU6rTsTU1_Yi6VgNreQcjEdZ3BVjr0-tY8cPs",
    client_secret:
        "EKtaO_au6PCPlN6_v-SwJ7MsoRHNsDLuW8pzG1KJb22VfxQIQF7kqthp2ITTSOVz-i4X39UiQXAkx4qC"
});

let total

app.get('/', (req, res)=>{
    res.render('index')
})


app.post("/paypal", (req, res) => {
    const {item_list, amount, description} = JSON.parse(req.body)
    total = amount.total
    var create_payment_json = {
        intent: "sale",
        payer: {
            payment_method: "paypal"
        },
        redirect_urls: {
            return_url: "http://192.168.88.77:3000/success",
            cancel_url: "http://192.168.88.77:3000/cancel"
        },
        transactions: [
            {
                item_list: {
                    items: [
                    ...item_list.items
                    ]
                },
                amount :{
                    currency : amount.currency,
                    total: amount.total
                },
                description
            }
        ]
    };


    paypal.payment.create(create_payment_json, function(error, payment) {
        if (error) {
            console.log(error)
            throw error;
        } else {
            res.redirect(payment.links[1].href);
        }
    });
});

app.get("/success", (req, res) => {
    var PayerID = req.query.PayerID;
    var paymentId = req.query.paymentId;
    var execute_payment_json = {
        payer_id: PayerID,
        transactions: [
            {
                amount :{
                    currency : "USD",
                    total
                },
            }
        ]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function(
        error,
        payment
    ) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            res.render("success");
        }
    });
});

app.get("/cancel", (req, res) => {
    res.render("cancel");
});





app.listen(3000, ()=>{
    console.log("listening on 3000")
})