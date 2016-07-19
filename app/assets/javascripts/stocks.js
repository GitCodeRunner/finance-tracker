var init_stock_lookup;

init_stock_lookup = function() {
  global('#stock-lookup-form').on('ajax:success', function(event, data, status){
    global('#stock-lookup').replaceWith(data);
    init_stock_lookup();
  });
  
  global('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error){
    global('#stock-lookup-results').replaceWith(' ');
    global('#stock-lookup-errors').replaceWith('Stock was not found.');
  });
}



global(document).ready(function() {
  init_stock_lookup();
})


