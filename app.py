from flask import Flask, url_for, request, render_template, jsonify
import stripe

app = Flask(__name__, static_folder='build/static', template_folder='build')

@app.route('/')
def runReact():
    return render_template('index.html')

# create a customer from card details enter in front end app
@app.route('/customer',methods=["POST"])
def createCustomer():
    try:
        if request.method == "POST":
            tok = request.json
            """             customer = stripe.Customer.create(
                source = tok,
                email = "valid_email@example.com"
            ) """
            
            charge = stripe.Charge.create(
                amount = 1000,
                currency = 'usd',
                source = tok,
                description = "test charge from new customer object"
            )

            return jsonify(charge.outcome)
        else:
            return "Was not a post"
    except Exception as e:
        return jsonify(e), 403


# use a hard-coded customer to create a charge
@app.route('/charge')
def createCharge():
    try:
        charge = stripe.Charge.create(
            amount=2000,
            currency="usd",
            customer="cus_Fe9NPdwkQgucBM",
            description="Test charge."
        )
        
        return jsonify(charge.outcome.seller_message)
    
    except Exception as e:
        return jsonify(e), 403

if __name__ == "__main__":
    stripe.api_key = "sk_test_hy0shILYndGY2GVEeuO90TVf00kDdq76wp"
    stripe.api_version = "2019-05-16"
    app.run(debug=True, port=5000)