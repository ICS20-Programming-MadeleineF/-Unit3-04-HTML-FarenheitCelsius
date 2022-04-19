// Copyright (c) 2022 Madeleine Forgeron All rights reserved
//
// Created by: Madeleine Forgeron
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates fahrenheit to celsius.
 */
function calculateCelsius() {
  // input / Fahrenheit
  let fahrenheit = parseFloat(document.getElementById('fahrenheit-to-celsius').value)
  
  // process calculation
  let celsius = (fahrenheit - 32) * 5/9
  
  // output / celsius
  document.getElementById('celsius-answers').innerHTML = 'The celsius is: ' + celsius.toFixed(0) + ' ° '
}