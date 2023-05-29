function convertlength(){
    const inputvalue = parseFloat(document.getElementById('inputvalue').value);
  const fromunit = document.getElementById('fromunit').value;
  const tounit = document.getElementById('tounit').value;
    let result;




    if (fromunit === 'kilometer') {
        if (tounit === 'meter') {
          result = inputvalue * 1000;
        } else if (tounit === 'mile') {
          result = inputvalue * 0.621371;
        } else if (tounit === 'millimeter') {
          result = inputvalue * 1000000;
        } else if (tounit === 'micrometer') {
          result = inputvalue * 1000000000;
        } else {
          result = inputvalue;
        }
      }
      else if (fromunit === 'millimeter') {
        if (tounit === 'kilometer') {
          result = inputvalue / 1000000;
        } else if (tounit === 'micrometer') {
          result = inputvalue * 1000;
        } else if (tounit === 'meter') {
          result = inputvalue / 1000;
        } else {
          result = inputvalue;
        }
      }
      else if (fromunit === 'micrometer') {
        if (tounit === 'kilometer') {
          result = inputvalue / 1000000000;
        } else if (tounit === 'millimeter') {
          result = inputvalue / 1000;
        } else if (tounit === 'meter') {
          result = inputvalue / 1000000;
        } else {
          result = inputvalue;
        }
      }
       else if (fromunit === 'meter') {
        if (tounit === 'kilometer') {
          result = inputvalue / 1000;
        } else if (tounit === 'millimeter') {
          result = inputvalue * 1000;
        } else if (tounit === 'micrometer') {
          result = inputvalue * 1000000;
        } else {
          result = inputvalue;
        }
      }
      document.getElementById('result').textContent = result;
    }
    function converttemp(){
        const inputValue = parseFloat(document.getElementById('inputValue').value);
        const fromUnit = document.getElementById('fromUnit').value;
        const toUnit = document.getElementById('toUnit').value;
          let result;
          if (fromUnit === 'celsius') {
            if (toUnit === 'fahrenheit') {
              result = (inputValue * 9/5) + 32;
            } else if (toUnit === 'kelvin') {
              result = inputValue + 273.15;
            } else {
              result = inputValue;
            }
        }
             else if (fromUnit === 'fahrenheit') {
                if (toUnit === 'celsius') {
                  result = (inputValue - 32) * 5/9;
                } else if (toUnit === 'kelvin') {
                  result = (inputValue + 459.67) * 5/9;
                } else {
                  result = inputValue;
                }
              }
              
              else if (fromUnit === 'kelvin') {
                if (toUnit === 'celsius') {
                  result = inputValue - 273.15;
                } else if (toUnit === 'fahrenheit') {
                  result = (inputValue * 9/5) - 459.67;
                } else {
                  result = inputValue;
                }
              }
            
              document.getElementById('resultt').textContent = result;
    } 
   
    function convertArea() {
      const input = parseFloat(document.getElementById('input').value);
      const from = document.getElementById('from').value;
      const to = document.getElementById('to').value;
        let result1;

        if (from === 'square Meter') {
          if (to === 'square Kilometer') {
            result1 = input / 1000000;
          } else if (to === 'square Millimeter') {
            result1 = input * 1000000;
          } else if (to === 'square Centimeter') {
            result1 = input * 10000;
         } else {
            result1 = input;
          }
        }
        else if (from === 'square Kilometer') {
          if (to === 'square Meter') {
            result1 = input * 1000000;
          } else if (to === 'square Millimeter') {
            result1 = input * 1000000000000;
          } else if (to === 'square Centimeter') {
            result1 = input * 10000000000;
         
          } else {
            result1 = input;
          }
        }
        else if (from === 'square Centimeter') {
          if (to === 'square Meter') {
            result1 = input/ 10000;
          } else if (to === 'square Millimeter') {
            result1 = input *100;
          } else if (to === 'square Kilometer') {
            result1 = input / 10000000000;
         
          } else {
            result1 = input;
          }
        }
        else if (from === 'square Millimeter') {
          if (to === 'square Meter') {
            result1 = input / 1000000;
          } else if (to === 'square Centimeter') {
            result1 = input / 100;
          } else if (to === 'square Kilometer') {
            result1 = input  / 1000000000000;
          } else {
            result1 = input;
          }
        }
      document.getElementById("result1").textContent = result1;
      }
      function convertweight() {
        const Input = parseFloat(document.getElementById('Input').value);
        const From = document.getElementById('From').value;
        const To = document.getElementById('To').value;
          let result2;

          if (From === 'Kilogram') {
            if (To === 'Gram') {
              result2 = Input * 1000;
            } else if (To === 'Milligram') {
              result2 = Input * 1000000;
            } else if (To === 'Pound') {
              result2 = Input * 2.20462;
           } else {
              result2 = Input;
            }
          }
          if (From === 'Gram') {
            if (To === 'Kilogram') {
              result2 = Input /1000;
            } else if (To === 'Milligram') {
              result2 = Input * 1000;
            } else if (To === 'Pound') {
              result2 = Input / 453.592;
           } else {
              result2 = Input;
            }
          }
          if (From === 'Milligram') {
            if (To === 'Kilogram') {
              result2 = Input / 1000000;
            } else if (To === 'Gram') {
              result2 = Input / 1000;
            } else if (To === 'Pound') {
              result2 = Input / 453592.37;
           } else {
              result2 = Input;
            }
          }
          if (From === 'Pound') {
            if (To === 'Kilogram') {
              result2 = Input * 0.453592;
            } else if (To === 'Gram') {
              result2 = Input  * 453.592;
            } else if (To === 'Milligram') {
              result2 = Input  * 453592.37;
           } else {
              result2 = Input;
            }
          }
          document.getElementById("result2").textContent = result2;
        }
        function converttime() {
          const inputt = parseFloat(document.getElementById('inputt').value);
          const fromm = document.getElementById('fromm').value;
          const too = document.getElementById('too').value;
            let result3;
            if (fromm === 'Second') {
              if (too === 'Minute') {
                result3 = inputt /60 ;
              } else if (too === 'Hour') {
                result3 = inputt /3600;
              } else if (too === 'Day') {
                result3 = inputt/ 86400;
              } else if (too === 'Week') {
                result3 = inputt / (86400 * 7);
              } else if (too === 'Month') {
                result3 = inputt  / (86400 * 30);
             } else {
                result3 = inputt;
              }
            }
            if (fromm === 'Minute') {
              if (too === 'Second') {
                result3 = inputt*60;
              } else if (too === 'Hour') {
                result3 = inputt /60;
              } else if (too === 'Day') {
                result3 = inputt / (24 * 60);
              } else if (too === 'Week') {
                result3 = inputt  / (7 * 24 * 60);
              } else if (too === 'Month') {
                result3 = inputt  / (24 * 60 * 30);
             } else {
                result3 = inputt;
              }
            }
            if (fromm === 'Hour') {
              if (too === 'Minute') {
                result3 = inputt * 60;
              } else if (too === 'Second') {
                result3 = inputt * 60 * 60;
              } else if (too === 'Day') {
                result3 = inputt / 24;
              } else if (too === 'Week') {
                result3 = inputt  / (7 * 24);
              } else if (too === 'Month') {
                result3 = inputt  / (24 * 30);
             } else {
                result3 = inputt;
              }
            }
            if (fromm === 'Day') {
              if (too === 'Minute') {
                result3 = inputt * 24 * 60;
              } else if (too === 'Hour') {
                result3 = inputt * 24;
              } else if (too === 'Second') {
                result3 = inputt* 24 * 60 * 60;
              } else if (too === 'Week') {
                result3 = inputt*7
              } else if (too === 'Month') {
                result3 = inputt  * 30;
             } else {
                result3 = inputt;
              }
            }
            if (fromm === 'Week') {
              if (too === 'Minute') {
                result3 = inputt * 7 * 24 * 60;
              } else if (too === 'Hour') {
                result3 = inputt * 7 * 24;
              } else if (too === 'Day') {
                result3 = inputt* 7;
              } else if (too === 'Second') {
                result3 = inputt * 7 * 24 * 60 * 60;
              } else if (too === 'Month') {
                result3 = inputt * 4 ; 
             } else {
                result3 = inputt;
              }
            }
            if (fromm === 'Month') {
              if (too === 'Minute') {
                result3 = inputt* 30 * 24 * 60;
              } else if (too === 'Hour') {
                result3 = inputt* 30 * 24;
              } else if (too === 'Day') {
                result3 = inputt *30;
              } else if (too === 'Week') {
                result3 = inputt *4;
              } else if (too === 'Second') {
                result3 = inputt  * 30 * 24 * 60 * 60;
             } else {
                result3 = inputt;
              }
            }
            document.getElementById("result3").textContent = result3;
          }


