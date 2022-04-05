var dynamic_options = {
    'cat1': [{
      value: "1",
      text: "Option 1"
    }, {
      value: "2",
      text: "Option 2"
    }],
  
    'cat2': [{
      value: "3",
      text: "Option 3"
    }, {
      value: "4",
      text: "Option 4"
    }],
    'cat3': [{
        value: "3",
        text: "Option 5"
      }, {
        value: "4",
        text: "Option 6"
      }]
  };
  
  $(function() {
    var answers = $('#myAnswers').find('select');
    $('#myQuestions').on('change', 'select', function(e) {
      var options = dynamic_options[this.value] || [];
      answers.find('option:gt(0)').remove();
      $.each(options, function(i, option) {
        answers.append($('<option>').prop(option));
      });
    });
  });