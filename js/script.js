// Business Logic
function BankAccount (name,balance){
  this.name = name;
  this.balance = balance;
}
BankAccount.prototype.deposit = function(amount){
  return this.balance+=amount;
  $("#warning").text("");
}
BankAccount.prototype.withdraw = function(amount){
  if (amount>this.balance){
    $("#warning").text("");
    $("#warning").append("<div class='warning-wrapper'>You cannot withdraw more than you have")
    $("#warning").show()
  } else if(this.balance-amount<500){
    $("#warning").text("");
    alert("<div class='warning-wrapper'>You need to maintain a balance of not less than Ksh.500</div>")
    $("#warning").append("<div class='warning-wrapper'>You need to maintain a balance of not less than Ksh.500</div>");
    $("#warning").css({"display":"table"});
    $("#warning").show();
  }else{
    $("#warning").text("");
    $("#warning").hide();
    return this.balance-=amount;
  }
}

// User Interface Logic
$("form#create-account").submit(function(event){
  event.preventDefault();
  var inputtedName = $("input#name").val();
  var inputtedInitialDeposit = parseInt($("input#initial").val());
  var newAccount = new BankAccount(inputtedName,inputtedInitialDeposit);
  $("div.create-account").text("");
  $("div.create-account").append("<div>"+
                                    "<h3>Account Information</h3>"+
                                      "<div class='form-group'>"+
                                        "<label for='name'>Name:</label>"+
                                        "<button class='form-control' id='name'>"+newAccount.name+"</button>"+
                                      "</div>"+
                                      "<div class='form-group'>"+
                                        "<label for='balance'>Balance:</label>"+
                                        "<button class='form-control' id='balance'>"+newAccount.balance+"</button>"+
                                      "</div>"+
                                    "</div>"
                                  );

  $("#transactions").show();


  $("form#deposit").submit(function(event){
    event.preventDefault();
    var depoAmount = parseInt($("input#deposit").val());
    newAccount.deposit(depoAmount);
    console.log(newAccount.balance);
    $("button#balance").text(newAccount.balance);
    $("input#deposit").val("");
  });

  $("form#withdraw").submit(function(event){
    event.preventDefault();
    var withdrawAmount = parseInt($("input#withdraw").val());
    newAccount.withdraw(withdrawAmount);
    console.log(newAccount.balance);
    $("button#balance").text(newAccount.balance);
    $("input#withdraw").val("");
  });


});
