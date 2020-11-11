window.BENCHMARK_DATA = {
  "lastUpdate": 1605110947917,
  "repoUrl": "https://github.com/Handlebars-Net/Handlebars.Net",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "committer": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "distinct": true,
          "id": "06a7c2f61fe876024060043b6e5db0045d4a0cb4",
          "message": "Fix CI flow",
          "timestamp": "2020-10-10T23:11:17+03:00",
          "tree_id": "62fcb2381e90720e0a477584054cb0227a642b11",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/06a7c2f61fe876024060043b6e5db0045d4a0cb4"
        },
        "date": 1602361013423,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 38094313.87912088,
            "unit": "ns",
            "range": "± 988604.685991903"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 111.80140233039856,
            "unit": "ns",
            "range": "± 2.0101465280550364"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 123.24848914146423,
            "unit": "ns",
            "range": "± 3.416504309553798"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 144.14054804581863,
            "unit": "ns",
            "range": "± 1.7928230874804232"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 645.4823929786683,
            "unit": "ns",
            "range": "± 31.454346614199324"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 331.9645745754242,
            "unit": "ns",
            "range": "± 7.792124989761809"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 358.569322347641,
            "unit": "ns",
            "range": "± 7.811808432307189"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 2002.5345984141031,
            "unit": "ns",
            "range": "± 34.701871899428575"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 1983.610055287679,
            "unit": "ns",
            "range": "± 47.44529123178334"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 2245.8239687601726,
            "unit": "ns",
            "range": "± 51.75968128967539"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 3874438.269230769,
            "unit": "ns",
            "range": "± 39584.2726897274"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 3860625.307198661,
            "unit": "ns",
            "range": "± 115303.22133554166"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "committer": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "distinct": true,
          "id": "01ef770e6843d6779fbd6f3a7b700a6bf677bbe9",
          "message": "Update readme with CI/Sonar info",
          "timestamp": "2020-10-11T20:01:59+03:00",
          "tree_id": "0d58d05bcbeb7d049204ab484a9705b703014d56",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/01ef770e6843d6779fbd6f3a7b700a6bf677bbe9"
        },
        "date": 1602436035124,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 44911432.87777778,
            "unit": "ns",
            "range": "± 2111707.8229665207"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 130.25045762062072,
            "unit": "ns",
            "range": "± 8.27294590189249"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 127.30757771219525,
            "unit": "ns",
            "range": "± 4.932222737379302"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 169.18157666524252,
            "unit": "ns",
            "range": "± 10.564743971908127"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 705.1620930989583,
            "unit": "ns",
            "range": "± 24.45441053526425"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 390.51982107162473,
            "unit": "ns",
            "range": "± 18.18713143375078"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 417.1917410850525,
            "unit": "ns",
            "range": "± 15.708929864034964"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 2221.6751643589564,
            "unit": "ns",
            "range": "± 66.20257217740578"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 2244.7922439575195,
            "unit": "ns",
            "range": "± 51.438884645987635"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 2173.730542755127,
            "unit": "ns",
            "range": "± 94.81969256205772"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 4160659.4972098214,
            "unit": "ns",
            "range": "± 116483.94963266149"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 4308724.955729167,
            "unit": "ns",
            "range": "± 182842.19893818576"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "committer": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "distinct": true,
          "id": "f022ffc8c732c517f6f903d6590845691757211d",
          "message": "Update readme with CI/Sonar info",
          "timestamp": "2020-10-11T20:02:51+03:00",
          "tree_id": "acf30056d3508e7a6e093d363e72e5f34cf8c586",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/f022ffc8c732c517f6f903d6590845691757211d"
        },
        "date": 1602436120241,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 40804369.41666667,
            "unit": "ns",
            "range": "± 2602924.0087673147"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 113.7993238247358,
            "unit": "ns",
            "range": "± 3.347622495870392"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 124.92140010197957,
            "unit": "ns",
            "range": "± 8.830737597310188"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 158.6599274555842,
            "unit": "ns",
            "range": "± 7.2979234786732174"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 697.0572381337483,
            "unit": "ns",
            "range": "± 36.24614864536951"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 352.74170855113437,
            "unit": "ns",
            "range": "± 7.954253028397034"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 381.711395910808,
            "unit": "ns",
            "range": "± 10.575453550421964"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 2064.881165313721,
            "unit": "ns",
            "range": "± 123.77117323832637"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 1990.4557931082588,
            "unit": "ns",
            "range": "± 98.64030234598182"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 2279.1798769632974,
            "unit": "ns",
            "range": "± 114.73531419621355"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 4077116.7119791666,
            "unit": "ns",
            "range": "± 140014.32700488254"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 4180246.35625,
            "unit": "ns",
            "range": "± 276646.1472270508"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "committer": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "distinct": true,
          "id": "a939d2fe61fe1a0a70e654a5869389a12c629e5c",
          "message": "Update readme with CI/Sonar info",
          "timestamp": "2020-10-11T20:04:12+03:00",
          "tree_id": "fdf84934e8452a532c667a2c4f082e3ceb23f47d",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/a939d2fe61fe1a0a70e654a5869389a12c629e5c"
        },
        "date": 1602436205796,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 37118763.79591836,
            "unit": "ns",
            "range": "± 515449.75404867914"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 106.65371568202973,
            "unit": "ns",
            "range": "± 1.1289635063276644"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 110.67338307698567,
            "unit": "ns",
            "range": "± 1.256084426869548"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 135.90883574883142,
            "unit": "ns",
            "range": "± 2.0203653095727074"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 586.8717856725057,
            "unit": "ns",
            "range": "± 10.26986619312994"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 320.95129915873207,
            "unit": "ns",
            "range": "± 5.241040708311511"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 335.15519295419966,
            "unit": "ns",
            "range": "± 3.1316305560372943"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 1757.17291532244,
            "unit": "ns",
            "range": "± 16.205919592472394"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 1802.3412659962971,
            "unit": "ns",
            "range": "± 30.03640421738016"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 1874.3060961405436,
            "unit": "ns",
            "range": "± 44.494029347397266"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 3528533.53984375,
            "unit": "ns",
            "range": "± 85787.68391815248"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 3618532.3546316964,
            "unit": "ns",
            "range": "± 36288.92254145676"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "323f4e5dd79fdfc38dc719b92eb08d99b5ba7f34",
          "message": "Merge pull request #359 from zjklee/master\n\nMerging fork into trunk",
          "timestamp": "2020-10-12T19:56:07+03:00",
          "tree_id": "10d48739d8169aca0856e5ccf06546493e922733",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/323f4e5dd79fdfc38dc719b92eb08d99b5ba7f34"
        },
        "date": 1602522083169,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 29379235.879166666,
            "unit": "ns",
            "range": "± 134482.92648796353"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 216.31903753961836,
            "unit": "ns",
            "range": "± 0.19764076777251852"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 235.75859769185385,
            "unit": "ns",
            "range": "± 0.1767348821859345"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 263.02979839765106,
            "unit": "ns",
            "range": "± 1.497327239665997"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 442.8253549337387,
            "unit": "ns",
            "range": "± 0.536525802234178"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 461.9604452337538,
            "unit": "ns",
            "range": "± 0.46792628386433666"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 499.6754415218647,
            "unit": "ns",
            "range": "± 0.8862103659667435"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 972.3469884055002,
            "unit": "ns",
            "range": "± 1.1127504199727698"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 980.8573020935058,
            "unit": "ns",
            "range": "± 3.9678847632194008"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 1013.1303179814265,
            "unit": "ns",
            "range": "± 2.4144359844213223"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 664496.8155048077,
            "unit": "ns",
            "range": "± 491.3268415421587"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 719144.0558035715,
            "unit": "ns",
            "range": "± 673.0116375834513"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "committer": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "distinct": true,
          "id": "94197f44a9d446590eac780c327fbd371d18cee2",
          "message": "Disable benchmark failure on perf alert",
          "timestamp": "2020-10-12T20:07:31+03:00",
          "tree_id": "5fc93f126074ef061f8a666bec1d339004746339",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/94197f44a9d446590eac780c327fbd371d18cee2"
        },
        "date": 1602522827492,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 29109043.385416668,
            "unit": "ns",
            "range": "± 983081.4670666108"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 181.98750316301982,
            "unit": "ns",
            "range": "± 9.597813977536664"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 190.04774635632833,
            "unit": "ns",
            "range": "± 10.210988687531172"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 211.96112274328868,
            "unit": "ns",
            "range": "± 11.03150319879609"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 388.04920400891984,
            "unit": "ns",
            "range": "± 13.81765886085141"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 400.36630984942116,
            "unit": "ns",
            "range": "± 21.760113094617342"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 425.2765923500061,
            "unit": "ns",
            "range": "± 22.082496742726626"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 786.7405904134115,
            "unit": "ns",
            "range": "± 35.912005376594614"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 856.4691944122314,
            "unit": "ns",
            "range": "± 41.877452322184624"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 865.4222745895386,
            "unit": "ns",
            "range": "± 48.29804578313845"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 616384.9518880208,
            "unit": "ns",
            "range": "± 28846.44600256716"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 689526.9905598959,
            "unit": "ns",
            "range": "± 52685.59171396467"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b72cd8bad194c7a42d60d4df3c332e72372ad251",
          "message": "Merge pull request #371 from zjklee/merging/late-binding-improvement\n\nInfrastructure improvements",
          "timestamp": "2020-10-18T00:05:49+03:00",
          "tree_id": "7f2f7de4e870e109d64f126ef4b688c6fe8f71db",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/b72cd8bad194c7a42d60d4df3c332e72372ad251"
        },
        "date": 1602969073226,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 20056724.420833334,
            "unit": "ns",
            "range": "± 509140.8268425644"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 324.4735985120138,
            "unit": "ns",
            "range": "± 9.576027282125526"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 319.6597719192505,
            "unit": "ns",
            "range": "± 7.938042151166329"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 346.2416379610697,
            "unit": "ns",
            "range": "± 8.2258841066088"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 423.6806919415792,
            "unit": "ns",
            "range": "± 10.87813235162832"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 328.0120960871379,
            "unit": "ns",
            "range": "± 11.388298933065512"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 361.0909435749054,
            "unit": "ns",
            "range": "± 13.168643024171637"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 689.2495915095011,
            "unit": "ns",
            "range": "± 12.883260266941784"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 689.7415002822876,
            "unit": "ns",
            "range": "± 15.478601454014107"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 737.3946743647258,
            "unit": "ns",
            "range": "± 24.107416228824807"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 246580.7543457031,
            "unit": "ns",
            "range": "± 8283.748259986047"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 258592.634375,
            "unit": "ns",
            "range": "± 9249.212626295168"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec841d1c8a53548a3b8ec011eb9a5449c4544586",
          "message": "Merge pull request #376 from zjklee/feature/nuget-impr\n\nEnable CI build, add SourceLink",
          "timestamp": "2020-10-26T16:21:19+02:00",
          "tree_id": "f47a0efb0aef0854e350186f4d519d7c821c2e0e",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/ec841d1c8a53548a3b8ec011eb9a5449c4544586"
        },
        "date": 1603722401137,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 19088174.595833335,
            "unit": "ns",
            "range": "± 243671.9057016972"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 308.9198212623596,
            "unit": "ns",
            "range": "± 3.7027354827757937"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 320.40050509997775,
            "unit": "ns",
            "range": "± 6.3023088105791265"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 362.47619773546853,
            "unit": "ns",
            "range": "± 5.988276022793533"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 416.12187836964927,
            "unit": "ns",
            "range": "± 8.816345095756885"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 326.2408130009969,
            "unit": "ns",
            "range": "± 5.316395037388925"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 347.47285102208457,
            "unit": "ns",
            "range": "± 5.513120970666432"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 670.5265794754029,
            "unit": "ns",
            "range": "± 15.93880332718411"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 686.3951638085501,
            "unit": "ns",
            "range": "± 7.931732950280785"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 755.470709323883,
            "unit": "ns",
            "range": "± 6.077093598617403"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 247534.29649135045,
            "unit": "ns",
            "range": "± 3515.2184140596873"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 268289.3352748326,
            "unit": "ns",
            "range": "± 2584.144495820786"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "committer": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "distinct": true,
          "id": "29bc70852bcf870a4d328111a822aa8eaf50e5a5",
          "message": "Update .NET SDK version in CI",
          "timestamp": "2020-10-26T17:30:58+02:00",
          "tree_id": "3898925d0ca05194c5e1bb6c28b096d7e915cea7",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/29bc70852bcf870a4d328111a822aa8eaf50e5a5"
        },
        "date": 1603726599462,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 21042357.335416667,
            "unit": "ns",
            "range": "± 531085.2827676884"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 350.5379079500834,
            "unit": "ns",
            "range": "± 4.819909124757851"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 365.12415736062184,
            "unit": "ns",
            "range": "± 4.220984290495963"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 393.4304687182109,
            "unit": "ns",
            "range": "± 4.17637149551333"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 465.8464023590088,
            "unit": "ns",
            "range": "± 4.454888298978081"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 369.1967822313309,
            "unit": "ns",
            "range": "± 3.428673870722887"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 404.98468720118206,
            "unit": "ns",
            "range": "± 4.551448831184287"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 730.4528118133545,
            "unit": "ns",
            "range": "± 8.60131318572114"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 770.2660761560712,
            "unit": "ns",
            "range": "± 5.898472296932446"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 794.6733649798801,
            "unit": "ns",
            "range": "± 9.451069360244324"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 274905.81508091517,
            "unit": "ns",
            "range": "± 4966.648961771271"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 301672.7965611049,
            "unit": "ns",
            "range": "± 4116.886871330797"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aceab78b3917fc291cbbde2c00602d0a03286c87",
          "message": "Update README.md\n\nDisplay `preview` package badge",
          "timestamp": "2020-10-26T17:38:54+02:00",
          "tree_id": "96035cc757fc7fcf6df9c3bda5222dd848e15298",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/aceab78b3917fc291cbbde2c00602d0a03286c87"
        },
        "date": 1603727063572,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 21122480.203125,
            "unit": "ns",
            "range": "± 407838.7859384311"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 332.4172096888224,
            "unit": "ns",
            "range": "± 7.003491880986063"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 356.9874269803365,
            "unit": "ns",
            "range": "± 5.343062575554579"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 386.17273708752225,
            "unit": "ns",
            "range": "± 4.641692266334682"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 445.0792442651895,
            "unit": "ns",
            "range": "± 4.6234884533718255"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 345.7754635810852,
            "unit": "ns",
            "range": "± 3.7649063073079234"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 378.59244625908985,
            "unit": "ns",
            "range": "± 3.4351829904176068"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 711.4379467964172,
            "unit": "ns",
            "range": "± 6.962606173478833"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 730.7679719289143,
            "unit": "ns",
            "range": "± 16.48717987761844"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 767.8266609632052,
            "unit": "ns",
            "range": "± 7.546792100766504"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 259621.69225260417,
            "unit": "ns",
            "range": "± 3104.4736589791405"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 284243.1380208333,
            "unit": "ns",
            "range": "± 4492.309673150321"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "committer": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "distinct": true,
          "id": "cc33fce9d25e66bfc1169c53dade976c8416a7ab",
          "message": "Move `ContinuousIntegrationBuild` to workflow",
          "timestamp": "2020-10-26T18:54:37+02:00",
          "tree_id": "cd372f308ddf8d9ba786d70620b485add0aeae36",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/cc33fce9d25e66bfc1169c53dade976c8416a7ab"
        },
        "date": 1603731660627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 25231727.317307692,
            "unit": "ns",
            "range": "± 444494.8351145859"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 388.04394027392067,
            "unit": "ns",
            "range": "± 10.852916166415138"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 395.45101305643715,
            "unit": "ns",
            "range": "± 7.599001867889658"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 437.88441228866577,
            "unit": "ns",
            "range": "± 7.945919568325183"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 514.8643965039935,
            "unit": "ns",
            "range": "± 10.082059681490277"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 398.74636462529503,
            "unit": "ns",
            "range": "± 10.404071952496812"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 437.7166626612345,
            "unit": "ns",
            "range": "± 14.50638468969605"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 826.6779331843059,
            "unit": "ns",
            "range": "± 19.089578257607986"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 876.7336546352932,
            "unit": "ns",
            "range": "± 25.14226492505866"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 918.8457656860352,
            "unit": "ns",
            "range": "± 35.720133136161024"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 297505.7770298549,
            "unit": "ns",
            "range": "± 6822.089121432665"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 327155.5546875,
            "unit": "ns",
            "range": "± 9129.46581297929"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6f6e561f0778e908763462f1040539e6dfbf7b7",
          "message": "Merge pull request #375 from zjklee/feature/data2\n\n`@data` and `noEscape`",
          "timestamp": "2020-10-27T10:33:12+02:00",
          "tree_id": "6a6155ccefed01997ee65d0d87619a413385a111",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/f6f6e561f0778e908763462f1040539e6dfbf7b7"
        },
        "date": 1603787918895,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 34028290.79523809,
            "unit": "ns",
            "range": "± 1265260.5055652475"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 357.6571513244084,
            "unit": "ns",
            "range": "± 0.0994648884908847"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 367.04995485941566,
            "unit": "ns",
            "range": "± 0.6793168463924086"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 371.1152695142306,
            "unit": "ns",
            "range": "± 5.895480755963987"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 546.4431444803873,
            "unit": "ns",
            "range": "± 12.79331417804332"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 369.2997646649679,
            "unit": "ns",
            "range": "± 0.7741897444180182"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 370.3078217873207,
            "unit": "ns",
            "range": "± 0.19367102678328396"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 595.3057911396027,
            "unit": "ns",
            "range": "± 0.18834202068664138"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 608.0273943680984,
            "unit": "ns",
            "range": "± 0.31857228484645445"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 640.8190136637006,
            "unit": "ns",
            "range": "± 10.067498576755902"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 210968.2376239483,
            "unit": "ns",
            "range": "± 427.8269097335108"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 230165.66662597656,
            "unit": "ns",
            "range": "± 613.636274876524"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f239ba10482c9aec20736ebc4205f3d79d2e3d1",
          "message": "Merge pull request #378 from zjklee/feature/helper-options\n\nIntroduce `HelperOptions` in Helper and ReturnHelper",
          "timestamp": "2020-11-01T02:41:44+02:00",
          "tree_id": "1bd84c0ad5421bf36e7cfb11d33aa14a6fa2c800",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/4f239ba10482c9aec20736ebc4205f3d79d2e3d1"
        },
        "date": 1604191661110,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 37123938.87142857,
            "unit": "ns",
            "range": "± 1613045.9086633173"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 411.7348847389221,
            "unit": "ns",
            "range": "± 6.068146320564097"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 409.96892093022666,
            "unit": "ns",
            "range": "± 15.965580484713643"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 414.5392350196838,
            "unit": "ns",
            "range": "± 5.502593982906607"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 574.3198080796462,
            "unit": "ns",
            "range": "± 5.964412447590354"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 417.63938630421956,
            "unit": "ns",
            "range": "± 6.613510478210782"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 400.63736292521156,
            "unit": "ns",
            "range": "± 8.75476946934173"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 661.6791969812833,
            "unit": "ns",
            "range": "± 14.01414976974492"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 651.2134197235107,
            "unit": "ns",
            "range": "± 24.79920038965599"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 677.8279979070028,
            "unit": "ns",
            "range": "± 6.737491809982804"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 212156.9918682392,
            "unit": "ns",
            "range": "± 2977.1376699148336"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 229510.01220703125,
            "unit": "ns",
            "range": "± 5568.1790712641005"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "575488d13e62dcbddbb03f48e50334412aef01f4",
          "message": "Merge pull request #382 from zjklee/issues/217\n\nFix whitespace support for partials",
          "timestamp": "2020-11-04T00:47:58+02:00",
          "tree_id": "3d9b725d7a22c331a0397815a9b5b3e501b77640",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/575488d13e62dcbddbb03f48e50334412aef01f4"
        },
        "date": 1604444022018,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 36552730.13333334,
            "unit": "ns",
            "range": "± 567127.2976141133"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 394.5375050385793,
            "unit": "ns",
            "range": "± 4.87674705757617"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 406.1298780759176,
            "unit": "ns",
            "range": "± 7.449846048844877"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 427.7546645800273,
            "unit": "ns",
            "range": "± 9.086424632599417"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 573.5755173819406,
            "unit": "ns",
            "range": "± 10.136062247311587"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 412.9993065765926,
            "unit": "ns",
            "range": "± 8.6141764916838"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 406.9154349395207,
            "unit": "ns",
            "range": "± 8.584512599545015"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 648.7821333067758,
            "unit": "ns",
            "range": "± 9.536225822359233"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 648.8216787746975,
            "unit": "ns",
            "range": "± 8.036522554192729"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 652.4849908192953,
            "unit": "ns",
            "range": "± 10.065910962258377"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 205189.05963134766,
            "unit": "ns",
            "range": "± 2120.004764019527"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 231404.65865885417,
            "unit": "ns",
            "range": "± 5934.813375092127"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "committer": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "distinct": true,
          "id": "fcf7d5718c0288583c2dd40071367f379e328b79",
          "message": "Add DynamicPartial test\n\nCloses Handlebars-Net/Handlebars.Net/issues/324",
          "timestamp": "2020-11-04T01:27:24+02:00",
          "tree_id": "6cc7f466422358d54d54201cd2e9f8fcb1dc2706",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/fcf7d5718c0288583c2dd40071367f379e328b79"
        },
        "date": 1604446374080,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 34586852.48660714,
            "unit": "ns",
            "range": "± 481383.9885916075"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 364.7207196553548,
            "unit": "ns",
            "range": "± 2.824186553547778"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 370.4663365364075,
            "unit": "ns",
            "range": "± 3.40310275574329"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 378.21554202299853,
            "unit": "ns",
            "range": "± 1.5943492390427638"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 574.1827005239634,
            "unit": "ns",
            "range": "± 6.3569435360193385"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 370.65517743428546,
            "unit": "ns",
            "range": "± 2.5275950309350983"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 379.4534394900004,
            "unit": "ns",
            "range": "± 2.691831308139732"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 605.1295370688805,
            "unit": "ns",
            "range": "± 6.046740858029136"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 618.5915754318237,
            "unit": "ns",
            "range": "± 2.8950472374841887"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 620.4698373794556,
            "unit": "ns",
            "range": "± 14.92223485164165"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 214924.8247419085,
            "unit": "ns",
            "range": "± 1307.3105657917329"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 245065.77696940105,
            "unit": "ns",
            "range": "± 2512.6777003973725"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "93625bf2f8e18ba1af0a1f720c3ab2e1dad371f2",
          "message": "Merge pull request #381 from zjklee/feature/iterators\n\nIntroduce `IIterator` + structure reorganisation",
          "timestamp": "2020-11-06T19:19:46+02:00",
          "tree_id": "d859180d0e7a574707f97bb15b71af7daa43eb10",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/93625bf2f8e18ba1af0a1f720c3ab2e1dad371f2"
        },
        "date": 1604683497629,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 8001045.96875,
            "unit": "ns",
            "range": "± 59723.55483058003"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 365.046790940421,
            "unit": "ns",
            "range": "± 1.1589626450915"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 365.10151859692166,
            "unit": "ns",
            "range": "± 2.9094907005612654"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 379.09357522328696,
            "unit": "ns",
            "range": "± 4.75735520594715"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 537.8893058640616,
            "unit": "ns",
            "range": "± 2.714767956320843"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 366.0700233532832,
            "unit": "ns",
            "range": "± 2.279631248917551"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 370.9645134485685,
            "unit": "ns",
            "range": "± 1.7402318003198771"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 591.5990870793661,
            "unit": "ns",
            "range": "± 4.075673646791099"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 608.4044011189387,
            "unit": "ns",
            "range": "± 4.642973385318162"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 607.123424911499,
            "unit": "ns",
            "range": "± 3.9093984307506133"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 194676.30477469307,
            "unit": "ns",
            "range": "± 855.1184580608164"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 205912.28867885045,
            "unit": "ns",
            "range": "± 1067.8276426967147"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41167595+probot-auto-merge[bot]@users.noreply.github.com",
            "name": "probot-auto-merge[bot]",
            "username": "probot-auto-merge[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d87dc59c067f7601fe5edfb5808582fe78e4d883",
          "message": "Merge pull request #358 from sferencik/fix-readme\n\nFix syntax for block helpers",
          "timestamp": "2020-11-07T15:26:44Z",
          "tree_id": "05a674e373a4c71ee233a7c3f6e0560450fbaa1c",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/d87dc59c067f7601fe5edfb5808582fe78e4d883"
        },
        "date": 1604763150812,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 8558416.080208333,
            "unit": "ns",
            "range": "± 204394.826918946"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 407.14831962585447,
            "unit": "ns",
            "range": "± 4.987448467401553"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 411.74183668409074,
            "unit": "ns",
            "range": "± 3.9287601854379766"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 449.2695032869066,
            "unit": "ns",
            "range": "± 8.296057833698596"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 593.3442877989548,
            "unit": "ns",
            "range": "± 4.078363704507277"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 411.5628914197286,
            "unit": "ns",
            "range": "± 5.840609496760153"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 418.24362325668335,
            "unit": "ns",
            "range": "± 4.622495515340131"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 684.7146427790324,
            "unit": "ns",
            "range": "± 9.093738664182084"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 690.7552483422415,
            "unit": "ns",
            "range": "± 13.003897459448561"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 703.679762395223,
            "unit": "ns",
            "range": "± 8.567426581912201"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 201957.86488560267,
            "unit": "ns",
            "range": "± 2016.429356869775"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 220175.95511067708,
            "unit": "ns",
            "range": "± 3199.6703835022977"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "271e165ac052464e269e4f3535b7d8eef82635cc",
          "message": "Merge pull request #384 from zjklee/feature/helper-ref\n\nReplace `StrongBox<T>` with `Ref<T>`",
          "timestamp": "2020-11-07T21:02:18+02:00",
          "tree_id": "3713fab848076f659a6fa949ed8ea19d9cf99c50",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/271e165ac052464e269e4f3535b7d8eef82635cc"
        },
        "date": 1604776061348,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 10158681.46986607,
            "unit": "ns",
            "range": "± 120107.09686455225"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 361.7967798028673,
            "unit": "ns",
            "range": "± 1.3204932198286172"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 381.2459104537964,
            "unit": "ns",
            "range": "± 5.096394211452154"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 388.7952182633536,
            "unit": "ns",
            "range": "± 7.327395865057832"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 570.9548582077026,
            "unit": "ns",
            "range": "± 2.5301205794119763"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 371.04702514012655,
            "unit": "ns",
            "range": "± 2.0081096773010456"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 381.05173250834144,
            "unit": "ns",
            "range": "± 1.6510987675937312"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 599.4635137411265,
            "unit": "ns",
            "range": "± 8.040178708093551"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 609.1257247243609,
            "unit": "ns",
            "range": "± 3.1036264942398715"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 678.9162092208862,
            "unit": "ns",
            "range": "± 4.393632527099495"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 200854.8007436899,
            "unit": "ns",
            "range": "± 2220.608711197849"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 217486.7310546875,
            "unit": "ns",
            "range": "± 3615.117634289309"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41167595+probot-auto-merge[bot]@users.noreply.github.com",
            "name": "probot-auto-merge[bot]",
            "username": "probot-auto-merge[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c97ac918a20424f50da988f19ab0b23f655299a",
          "message": "Merge pull request #356 from perlun/patch-1\n\nREADME.md: Add explicit casting in Handlebars.RegisterHelper",
          "timestamp": "2020-11-07T19:35:06Z",
          "tree_id": "69631b4507d888f1bd1eb500f59ed84ba3592f58",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/4c97ac918a20424f50da988f19ab0b23f655299a"
        },
        "date": 1604778041760,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 11219588.760044644,
            "unit": "ns",
            "range": "± 185389.2554516825"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 381.6916502157847,
            "unit": "ns",
            "range": "± 6.551577105921435"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 399.36676082611086,
            "unit": "ns",
            "range": "± 18.198661171611285"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 404.35497873624166,
            "unit": "ns",
            "range": "± 6.108198886818831"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 564.7705254554749,
            "unit": "ns",
            "range": "± 6.619629014264427"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 431.48929195404054,
            "unit": "ns",
            "range": "± 18.04243524220333"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 399.9814504623413,
            "unit": "ns",
            "range": "± 4.370231951150221"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 616.7209432601928,
            "unit": "ns",
            "range": "± 10.48500078239668"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 662.2042280197144,
            "unit": "ns",
            "range": "± 18.81115829246476"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 674.5099058787029,
            "unit": "ns",
            "range": "± 12.021986599373003"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 193835.22934570312,
            "unit": "ns",
            "range": "± 3968.5312792365517"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 203127.39358723958,
            "unit": "ns",
            "range": "± 4539.193418747925"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zjklee@gmail.com",
            "name": "Oleh Formaniuk",
            "username": "zjklee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c3af033c875f1a2012f442bc3443ce77dba8364",
          "message": "Merge pull request #386 from zjklee/issue/383\n\nUse `ParentContext` when handling `@partial-block`",
          "timestamp": "2020-11-11T08:03:46-08:00",
          "tree_id": "9566c66a8564a9e6cb4991fcfd19eeac9ac27544",
          "url": "https://github.com/Handlebars-Net/Handlebars.Net/commit/3c3af033c875f1a2012f442bc3443ce77dba8364"
        },
        "date": 1605110945429,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "HandlebarsNet.Benchmark.Compilation.Template",
            "value": 9225062.63392857,
            "unit": "ns",
            "range": "± 16444.40203970865"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithoutParameters",
            "value": 318.0631761891501,
            "unit": "ns",
            "range": "± 0.06530864522922991"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithOneParameter",
            "value": 325.0798048239488,
            "unit": "ns",
            "range": "± 0.11233410717675368"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallHelperWithTwoParameter",
            "value": 323.316931327184,
            "unit": "ns",
            "range": "± 0.05770895122136288"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithoutParameters",
            "value": 465.1785354614258,
            "unit": "ns",
            "range": "± 0.46123228093287355"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithOneParameter",
            "value": 316.8643116950989,
            "unit": "ns",
            "range": "± 0.07784316484738771"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.LateCallHelperWithTwoParameter",
            "value": 323.7334528923035,
            "unit": "ns",
            "range": "± 0.10125537363600529"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithoutParameters",
            "value": 517.1704692840576,
            "unit": "ns",
            "range": "± 0.08434779148887725"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithOneParameter",
            "value": 528.9313157154963,
            "unit": "ns",
            "range": "± 0.3059875749550525"
          },
          {
            "name": "HandlebarsNet.Benchmark.Execution.CallBlockHelperWithTwoParameter",
            "value": 541.5098329271589,
            "unit": "ns",
            "range": "± 0.11416443241002715"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"dictionary\")",
            "value": 167769.21407645088,
            "unit": "ns",
            "range": "± 632.0063340645966"
          },
          {
            "name": "HandlebarsNet.Benchmark.EndToEnd.Default(N: 5, DataType: \"object\")",
            "value": 174809.31548602766,
            "unit": "ns",
            "range": "± 60.65700218307799"
          }
        ]
      }
    ]
  }
}