/* eslint-disable */
const img = new Image();
window.phetImages.push( img );
img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACXCAYAAADQ8yOvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAGz9JREFUeNrsXQlwG9d5/nGDAAmAt0iRIqiDh3iBlGRRsl2BdtLUdlJRdg572sZU07TJtFNT7TQzaTql1UmmaaYNpWTaTqZJSE+S+khs0bYi13EtQnJt67JIXZZISiQokaAIkMDivoG+f0GA4AmAIiGAet/MzgKLBXax73v/9d77fwAKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCoo54NBHcP8xave3fjjt2+/wBZUOP6j8QVDwOMBIeNAv4XO0D+fy3yyT8nooMR4ABINBxYm73vZbtsALN6x+Razzq7J4zJZM7tEnNwiOcDgchhJjHeITk0/1vt57TGsPKJc6p1bGg705fJALODBkC8A1q5/s/aCUcrWPFwgO7Mjm91NirCP8dsLT9vGks8sY4C973l9vEYOIO/fYVYsf3pn0Qq6QA825/INPFQm71+o+ubSpkocPDN7Wdwd0XXcnJ4kuCSx7rtkbXFSK4DbtCcJJva8Lf48SI/1tCuU7twxdDrcn9N7nXfb8kwbvkioG4SQW6nt6bxf+LiVGGqN7yNKpN9siRmbQ71/2/DvOALwy5lkgOfTu2fdT7qDiZyPuLmpjpK+0ULX/31if3eGMHONJZcCTZMX1/dIMLhQQg0PvDrCEiUYG8Wv/YrOopSKLp1nNe+bTZlt7/GrY/kI0KUISwxf395EM8wkRBqqUCybf8+TlqhKDqpIkwOBwLzQSY6iSREBUyqoboZQYSVAjo2bXggBWIIbxmQhGHQEFXocSI72gcHgWURvEXQ2uEjlQneB1KDHWCQJe96r91om7XjUlxnohhtO2ar8l4a3u+Aklxv20P4gBGnA5VuW31PmrO3ZCibH20OZKhEt+6LOZY4bHYwFjGQRUYqQTOByOtkgq0C4tNgLgZabuiRxlEi5DrkMlRrohN0uiAc7Sjxq9E69Jv2K1kifirPokHhoST4YtEQwq//6MbsRgscduEB4POAIRcPgC4JKNPYb7JYiFauRf6zMaV1ti0JB4ktTJL2/ZujVWZ1sslYEGadAfkhyxYqP8rGyoK5b1rDYpqCpJIv5os/RQeb5iVQ3ETVIe83yZ8OBa3C8lRvKkBrPHc6c7X8xbld8ryFHA5zbJWtZq/iclRpJw+/Yd1YfvvdMu/PANKJCK7um3CnNzmCeU2Ws675NHmyw5aGra+fLg0E2l02aFnQVSyCsugQmcdBMMxt+LiVHaWJrf/9nSrAPNuQLNWt4vNT7vzdtQfHr9euvg4NB+h8Op8vl8yjkNyeUyYrG4f9u2rdq33z6uZlVAQQGAxwWyobPwT099Ad7VOaFfbwcbztdYxDBFL0UqFsOWvCzt3kLJYSIlupOi+mjzrsz9PH7inQ7duK6NndgbBxQKOUglUsjJyQW3xwPlyjLY/dBOuDU8wmzZXN5y4q63Vefw7Qt6ZgfWuKIMKMrgnnpyg2BNPA8qMVYRZ8+db//xv/9Hh8nELDvMnZ2dDdWVlSCVSsFkMsGdsTEY1+lg2miELVu2QG3NdrDbHWCxWLtnGr0/lf4nlRgJqI2eN9/qunzlalyzpb78zDMgFM4dI5nU6+HUBx+Ah0iMysoKqK6qgvq62nKMc6Ta/6USI05S/OznXb0jI1qVgDQ2aciY35lPCtabIPbFZx97DN47eRIGBgZBr9czfD5PkYr/mbqrceDV1359bGhoSOX1esAf5yReu92+pIqpIioGgero/ZO9vWu1NoQSYw3Rq9G82Nffrw7OuJXBQHzupWZGZSwah0DPZAZIjldf+80xSow08z4uXPikIxiYdSP9gfhmd6PBiSpjMcmBn0VjYHBQpTl1+kVqY6QJ3nr7eIfBYJjPlri/jwQ49tZbUFpSwqoQBEqRGwMDC84dHBp6gRAxKSkOqMS4R2kxMDDQNv94YAliNNTXgVgsXvQzdFUvX7nCbouRAjExcZcNllFVkuI4c/Zc69TU1ELCBBYfNjcaGaitrYWcnJwVX/PKlWsvUGKkOEZGRvYv9VlgEXIM3RzCYBUoy5RLSo5YMJvNKnSNKTFSGDabTb00MRYaoG6Xm0gNI9iIsVlHJMdKMBNeV1FipDACgaVnWgX8iwx2cTlgnJ5mX2/YUAg1NTUruu658xcoMVLY8FSPjo4u+blvkSAXn8/HSCb4fD4QCITQ1KiC4uKihK/tdDqpKklb4hBpMl+iZEql7N5AyDE4OAQlG4thR9OOFdsbK8XE3Ul11KagxFhdMLEaFMPj0eDxQyEhnU4HHq8XxsZ1UFtTDZUV25JFiBfJZuJyOL2ZmVJ24/F4JnKsayUEocRYBDgMXlS0YdlzfKTxo6WGl7yXSCTgdoeM0KvXPiUqRQC7H3ooIamRn5+nXQEpesmug2wKkVgEQqLKUILl5bKuM8ZiRsg5KkqMVQB5uDEbyO1yQjAq4CUShUZU9cS7wLkWI9pR1hCtr6+L65pIoO3V1QnNyxge0Xb6/X71rI3iAqPJBNPTRkLQSOgdJUYXJcYqQJGdrYnHc3G7XRFyoIRAoMRAyYFSg/U/6+vjkhrFRUUJLTVEFTExcbfdap27al5A1FoukRa4ybIyw4dV5Pw2Sox7xEO7dr3J4cZ+PH7ihbicDiC9FoQiEatOwrYGSg29wcA2UNmmTXGQUZHQUsOJiQk1j8dlrzXnnnDR0gxZw/czg32UGPcI4mr2VFdVxaXvUXIgORiTkbitvIh3gq7r1WvXWUlSW1sTU43U1dS8lMg9yuVylcsVmiPqcMyue8XxHINhig22zZMmSkqMVcCuXTsPxyM1onuqVBrqoUgKVCl6vYGVHAq5nDUGvR5PZPP5Zg3YpnoFU1a2KSHDc3p6usw/k+TNPy/ZG5LDZrOD3bGyhdJ0zmcM/PJXL/ddvnwpIYs+U5oFhqkpYoyKYMfOneyM8MqKrdB38TRkCnqhuvwWiEWz7u7tu2VQWCACEecThpv1ty08yTMx7Qwc/T137sIxIhXYe8PBOzR0Y6C/aENhYzz/gc7HiIHGxoaDExO6XoPBEHcswOsLNXrYdRUSVbJr+xl4pOp7pCubQw3rxlXsFcDNPATKcky79ArG2hUB2897/Y7XI+TAKCzxbtQZGeIGPo+vDAQDLBEGB2+yqiIMq9UaDzGoV7JaqNm+vX/Xrl2HMjOz4v4OEiI/Ly8UKSOu486tr4Fz8tsRUkTEtWgfcARN7MaT/QA4wt1EJ9xSWK2eLpOJOUZUQZCooV4icTo2FBa25uXlqnBtCgKDaJmZmXPiKGhXxArcUVWyytCcOt12+vQHXTabNT53V6EgXsMkPPeHHlBmv0KMSx9kyuZGSzm8IuBl/4K8CJEu6L0IfuabhCj1wC88wzY22igmxsx6NzhNUDoTekcphIuY8PNoZGVlsV7QPG8kjENElRyhxFhlvP7GsZHx8XHl2NhYXOdXbCuCz+88SjSEGQTCAMgVrkVaIAu40j9j1UrQdRwCrt+G7A7zd+D8tSrWmM0mJCvIz4eCgrwI6RA2mw0uX7kGLpdr2fvg8Xi4NJLJzlaUE2LEJTWojRGvB2A0tn73u/+sDLmedUQa6NArWPY7dVtusaRgpcFSo/hBKwRsnQsOl+W9Dc6ap1kyIDHCwbPxcR0bUcWxGPR2MjIyyOdy1gtaDhaL+cD26sq4VQklRryqRHN6Pz583HAFQfX2GjaqeHt0FG4ND+Nw+YLvbMwbJ8YAzLiviZlzQe9lqK0uBrtTwJIACYH7aDsG53+YzWZcPI2uNesFzYdQKNSKxeIDu3Y2JRRqp8SIE8QrYSfqoo7HBsDe+ujDe2Dnjh0486pbPzl5idgAEc9FJBbJ+dzvt0cLCq+XR3p+/Mnlb1x7HfqvyyNxEYvFEiEDEiMaFy5c0DY1NR0mBqoS7w1VkEQi1dTX1WhW8n8pMeJXI2yjF8wsFgoZfwpWrG/ZXH5065bNC3qk7sqT7XO8FWdixGAYBkZGjGAhRFhsfQrGLjLE4p4yZdlLzz375VXN3EeJEQc+/vjsvrAOz8nNDamJjcXsnvRO7VIDXwIBD6KnbbhcfJBIvcDlxbc2ZVxngwndXLMAh+WJatCUlpa++exXvqRZq3UolBhxQK/Xq6PVCAJnaKHIJi7lkj2Vw81CwsyJmlrMIpDJ3bHJwZVDgItq4MNT27ZuhaGbNzU/OvrD/mgiPPfs2v1nSoxYRmAwqPi3Hx5hG1cml0fUCEqMvv5L0KhqWHLgS5TZ8KbH+u4cYqARajKKQZyBo7F+4PMDwOEsJAlHuFv75S9/sSX62I9/1Jm0/00jn7GhGh29DdH2xcYZaWGx2rTLzZ/ILPrWEaG0gVlINg44HXwwm0QwbciAKb0ksuF7h10AXOlXD9/PP02JEQMnezWsGkEVEo46ohrBSTiblWXLNh6K/azCPznIE8gSkFAcgIyvdfMkz3RTYqQwGMZchnt5lBoRCAXEZbQwpaUlMT0BUfbBHkneNw7yxaVxXU+S99VuRVnnwfv9v2lIfJ49cdsRUJ83+fYxnpkaYzaTysYwilyvGQr4fgi6nODxYnI15eG62u0vxvvbTmOPysm81emxfaIOeBeG1AWZj2nF2c8eziq4v5KCEmMeIU7c9bZfMftfIMRYdni9TuyGzX4T/H7t5uyVuIo4j8I08Wt1wDOk9Pv8IJGIQJj7NxqRaG3zdlJiJIhBq1/do/N0ae0B5WKfYyHc1iIByAUctkryJ4wPrlr8UC/n9e/K4R9cy+y8lBj3Ccdv29ve19m63MLMJc95OJcPe3PmevVIjHcmvVgnhNlfLGxZj+TgPsiS4r0hXZdt2gBBz9LD1vNrqyNqZTx2w9rqb+o8KZlcjRJjhTbF69fGuxwzM6yDXs+S56J0wG0+ULUgkBw/GXYfo8RYDypk1No+PG2Z7eUxisug2uiZ8LL11VGCDNkCc8hy2exXfWLytVEbI82lxffO3B4ZNVoj3gc3IxN4ivx7+t0aGU/7l1vF5VRipCkuTjlbo0nBkiXOpK7LYZh4NatdX50SI4m4ZbQ3LJAiPs89/y7WV9cYfGpKjDSF0e5c2KsDgVWRGg5/UEGJsd5sj1UopT3hDOyjxFhnCNjN9CFQYiwiMYgqCdyj1MBqRJQYaYocacaS4Wu/2cDaG2HkChPz5iW81MgDTomxAuwuyTkFS6U2IKTwGScikVAcRf0D5wA73B4LSCJ1Pr+HEiNNUSbl9VTnZi7Zs5EUvqlx8DMG0GMeq1vXoX7sLChFy5OjTMLVpGIJK0qMBLCtQHEUYiRECThtMDx+l03q6raaYctAL1QEjBCwMXM3cl4GjwOVWbyj1PhMc3xBKXtRVaSIOVS+UVkOEzoduwoM0w6U3r4IFUEG/FbT7EYkS6XIo3k0X9BDibEO0FxWcLBAnrmssXjH4gKZTMYmP0EoshXQEJiC8qzZQnjlOZnar1fKD1B3dZ0AJ9c8XVPSEoscgZwiuHM7tHyAMTGwe9dOaOYZoTCDx5Lic1UlB1KlKhElxiqS47NS++EqzIe1hM0RyNnALiBGWwPVyeDQEDRur4TfE9ng281lLet1at8DH+AavHDmee1bv4C91kFoyBaCRMCb87moeHNIrcxIjYHBm+x+1/atcP7CxY71+lweaGJM6vXqmzdvsYNqfpsZcu9chhe2ZcCfb8uE1s3ZPTuKZJoCRaamsrKCCUsNxNlzn7Ar3eUyWdvNW8OtlBjrDCdPap7HhCdYayS8ygyz04g9DniyqvjoN5o2teCWm5vbE5Ya6KGYMD2BdhQqKrZiLs2uVClXRYmxCsDGnJwM5dYOF7gL57zApCPEoNSEz332K186iimNUGpMTEywx/r6LrHJ08o2lSj6+i93UGKsEwwMDrXeujXMvg7nvCgoCE3vIw2ujT4XFy5XVVWyRmZ0XAPXrypC+bHa19tM8QeWGH19/ZEqiRirYImRHyKG0Wha4Gns3bvnKKocJEVYaqAhiqveMfPvmbPnOykx1gEsFgtrNOJiZf5MdSLMkIf5NHNyshcMn1dVVnTX19dpw1IjnAPr7PkLrOoRiYStkzMJVigx0te+UN+4EaqYHLYvsHFRLTAmM1Rs26pZ7Ht79jQfDkuNsPuKCViRTCg1RkfvPE+Jkc7eSK9GHc6pFc6SE1YjxHZYMhlKtNRgB9dmpEZf32WWVFabrW292BoPJDFIL2fnZkYnQ0HDE+0F4r5qlvtuY6PqEKZlRtwcGmL3YfcVXV3iobxAiZGmsM+UcggnQ0FglhwMd2/ZUv7mct9VNdT3NDU1suTBfJuYahGBHgqmYLJYra2UGGkav2AYRjFHjcy4qS63R5ubkxNz+PyZp1sPbty4kR04G5qRGiht0D6ZmLirxLyglBjph0iytbDEKCkuZl1PsUgU15wKnKn1xBOfYw1RNug1U5PsYv8ldk+M0H2UGGkKtC/COTvRIxnRaqFRVR/3LKyG+rojjzy8NxQqv3NnTpL3sDrBJYvoAc1sCkqMFFYjg4NDz2NCVSxelz1T3gEL2m0oLOxOdM7m00SlVFRs60dShA1RJNnmDR8qvfqnTF5dUZ93TNKLm2+y2eSb+lKf3/F6Wzo8qwditXvAdVodsP2kI+i7qcas/rPdQg7OwOOgMz0GVXV/Wr6Syby3b99R/ffLr/aOj48r9j9VDnu2d4MArs/tfZmHgJvxLAR9g2wJCg6/uJ+X+9qBVJ48vO6JYZ/8/otc1486eFzT8qIz4/PYWC0rmY11sa9fNTxwvHdf7U8VMpl+QaZfPtqzvKLIe6xiBEETw99wrTFVycFd76SwjP+gw2mzx5YqzuMqn/7x3pXYAtVlWni05nWF121dtC6J3z53GIUj3EGkx4jCP/3HXan67NYtMTCvpk3/agdm2vUH4vubQc/HKr/prxIeDMP8nX5PyNNZLDlP0H0K/MSDDTh+OrO9MkPGN9SpanOsW2K4zO92hBsrIQPV/X5CYW08F5O6ht8vVcko6J+AgP2/2A3LXUWOO3+7nxIjifC5x1YUZAr6RomB+J9xf9dmeGNOpt+APzGzLegfb6XESJ5bqvbaP4q893oSrEfmuRB/gMp3c450wfJW6wEPTBwjoWJ1QfeKg1F+IjHWAzkeGGK4HGtTs4fDz17g3tqtAkqMFEU/T1wzlxguPrhd8ZGDI6iOOwGKNP/rGi5PvkA62SzCUO2RWNfi5mkoMZIEDFIJRJsWTLaxksbC6kHLNhhXDlzZd3oSuFa/SLZnwbWQiMYpMdhtQvC4eax6Wcww5UiefikVn+G6rYl2ffwz2i3yj1ThSslhIDFww1pkuGHROoxU8gVB9j1P9LhmuXJWi0GS/81DbsvHvfOvFS5x5VziMWcXf6ZfKEmN+iQPhMR4+ZXXul55/VKrdvqJZY1R7NVIEuzVWJ/Maq9kSA8+lOj1RFmPaGQbnj2SyHd4ojIGRM8dTNVnuK6IgeFsQoq+jz76uA3fn79RC25hW9wNJS3saOFJnlnRIuWMwu8dvar7Gsy3NxaDQNLAyIr/sSUjpzVlF0Tz1hMxqqpr3iGkaMbXWPGwpLQUxgylUNfUBn73HQj6Fpac4gpKQCRv0YiLfvOEVFF3Y6XXbmho7Hj35HDztOszUFa2FUR8DwT9hrkPW/IoI5B98V/ytv70OYGkWpvKz3Ld2BhvHz/R9bvfvafG1zgza+u2bezxJlUDcETFMMT8g6Zh6/hLDss1JRemyrz+nFFpViEjK/pGT2iE8+f3dH29wcCKJqudC+duNBNifgH2PfoIfHp9QJOXU3g4N08GofJWaNd+J+Wf57ogxnv/+37niRP/wzYMzvqurKpij+MEX1x4jBNxNpVsPJRV0LyI6P7mPV8/uva7PGpVm8vlIoYtnCremKtJt2ea9jbG2XMX2np7T7XjLCqcg4mSAve4QHn3QzuBYRhci3pk06bSNdPnH310Zn94ap8katW83WFP2+ea1sTA2VO9vZpOqzU0WomkCK8Teazl93CxMQyPjGobVfVrWvX47t276rC0Ci93xAVIXo8XamuqNZQYScap0x904ZQ6fF1eXh5Zboh2BTYMqpCSkuKDa5kjC4fdCTGU+FoWtU4F537ikgIChhIjiXj/ZO+L586dV4U9kKLiYvY4riFFuwJXhhEcLiwoWNMee+fOmBrXr4aN3tD9zFZLSjRYRolxjyqEuKUdYfGtLC+f0esKaGpsYO0Ks9nSk0gl5ZXi8pWrDbNSQhoxPFkPxWbTpGvHS0tinDp1uhN76XxjE+0Ku90OV65e71c11CUlqmgyGlmpFb1OBQ1PJCd5f4oSI0nov3S59crVa+rFjE0kxaUr17SPPrKnJVm5N90ejypaWoRVydj4RNoanmkVx8Bwt9frUw8MDHTu3bsn1CPFGexn6Jbq9VMwOHSTaaivTWpCVofdoYi2L7JDqZdYkkbn8aLEWANCWK22julpY7vX54M8or9LSkqAx+OBw+lk0zmPj+vA6XRpkRRrGa9Y5N7Uf/etb8+xLxREjWAiFfJZWucW56c6Ka5e/bRXrpCrsBeGgQ8fkZkpBT4hSCAQ1D7ycFXj/UjdjIuad+7cAc3NuyNpIQlJYXO5Mq3TSKf0SjSiGjqJO9i+YUNhJEaByMgQR0LPRJpgshOMW7SIREJNkonbev3GwLHs7OzIMSSrUCAEj9cDRPX1E0P0QDrWMeGmsLRQGgxT7fja75+7igd7pGFqGowmBuwOBwSCQaJWHB1Jvj9FX/+lTrKfc1yAHpJQAJlSVpqppo2m3nRMEJuyxLh67VM1DkIhwvto+P1+8HhmC+kSdaJO5v3dGBjsNJkY5fx7M5stLHHx/gLBAI7TKC0WayclxiqB6GplxPJ3xK5uiCRBYzBZ0sJoNLXha8wOHA2UXmaLhZVoSJCZc9pofow1APY+hlm+LiqXw5pLSTH4RrSjqllp5o55vjc08qqixFgda3+O2zk5ObmoSom4V8RrSda4xMiIdg5pl7uvdEXKEqOqskKTlZXFRDfA8PAI6HQ6VnqgeglvKM6JodedrHsrL1fCfNKuN6S0uzowONQ+NjYe03CTSCRM8+5dSUtCgvbCRx+fNUVLCoytFBYWsoG3+UBPJTc3JzudSmSltI1RWbHtSHFx0bKSgM/nM6RRDiYzVsAuaBII5twXSrGBgUEYHR3FoXggrnZkw3PTrW5aWqRaun5joNVms3daLBZlFCFAJsvqkcvlhzaXK7XJvieUGucvXByxWq3LehsZGWJmT/PuckqMtW0MJfEIlDisrVAo+u/3w56c1KuGR7RdxM5Z1OMgkqKfSL2DhYUFaTdZ54HI2rfWuHL1WhtRJfuRuESSKbhcrlYqlbxUV1vTna7/6f8FGAB9VKKFNr+bvgAAAABJRU5ErkJggg==';
export default img;
