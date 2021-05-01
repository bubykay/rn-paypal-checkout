const paypal = require('@paypal/checkout-server-sdk');
  
// Creating an environment
let clientId = "AUT4ur-gvNSPnrtqT5vWeSVU09AoyDH5hjWv0fsbcyVFU6rTsTU1_Yi6VgNreQcjEdZ3BVjr0-tY8cPs";
let clientSecret = "EKtaO_au6PCPlN6_v-SwJ7MsoRHNsDLuW8pzG1KJb22VfxQIQF7kqthp2ITTSOVz-i4X39UiQXAkx4qC";
// This sample uses SandboxEnvironment. In production, use LiveEnvironment
let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

// Construct a request object and set desired parameters
// Here, OrdersCreateRequest() creates a POST request to /v2/checkout/orders
let request = new paypal.orders.OrdersCreateRequest();
request.requestBody({
                          "intent": "CAPTURE",
                          "purchase_units": [
                              {
                                  "amount": {
                                      "currency_code": "USD",
                                      "value": "100.00"
                                  }
                              }
                           ]
                    });

// Call API with your client and get a response for your call
export default createOrder  = function(){
        console.log(request)
        // let response = await client.execute(request);
        // console.log(`Response: ${JSON.stringify(response)}`);
        // If call returns body in response, you can get the deserialized version from the result attribute of the response.
    //    console.log(`Order: ${JSON.stringify(response.result)}`);
}
// createOrder();