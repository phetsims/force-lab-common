/* eslint-disable */
const img = new Image();
window.phetImages.push( img );
img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACXCAYAAADQ8yOvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAF3lJREFUeNrsXQlwU/eZ/3Q/3U/ybWMsDMt9CNIAIU0wU9rQHIPTbCabdieY2WmadNsFdjZNZrutYabtbprZJew12cwmmOwmacomOBOSwoYGQUmgXg6b2+aSDca3bsm6te97kmzZfpKejQ89+/+b0Vh6kp713vu97/p/BwABAQEBAQEBAQEBAQEBQc5BRE5BTsFcaVSYH5mvNVHyGLvh0ytua0tPsJF52kiIMcPAkKHmqaV07cNztKZyWgp6dRQk4sH37zhD8HmL1/ruWccuhiR1hBjTH/TTywwHfri2oEqrkIBUEgODJgqiNFfF5Y/Chxdc1trD3VuZl5aJ/GEScm2mDKaXHi46+YM1BWaFVMySIU+bnhQIhVQEK8so+oEKVU1Th7+1zxdpJMSYZpLiuVV5v/uLr+UvTG5ASSHhcTVUxjwo1YjgvlJ5dcPt/gkjByHGFODRBfr3X6kqrhq42IoYKBUxXt+ldDToikvBII/AykJxdVNHoKnbE7463r9RTC7TpKPqxbUF1QNGHqM61FSU95c9vd0QCYVAX1IGy2Zp4U+X63ajBCISQ+Bg7Iqja2drBi6kThUFmXQUO4jFIOT3gUKjZz2HJYYIzbi0zeOtUojEmFxUM2rElCotkvGK0SDs90Of9ToEfV729XP30VuIKhEwtj1YuAXd0lTbYqyIRSIDxCjSSqsIMQTsiZTr5dVDDEl5dFx2XE7LWPeXEEOAqDQqqqsqtQOvMZglGaezv7hIQYghVDyxSL859bVcOn77vtwVwD9WQgwBokQrG2IHyKSxcds3hsoJMYQJ02xaPiTWIB7HVapWe3Dco5+EGJNEjPn5FEyUxGjuCVoIMQSIdRUa84hYRGR8RAYuyf/nH+0fE2IIEEuLlCNC1pHx8VTZPA2YgCV4QowpQiA0PhLDct27ZyJ+HyHGFBIjdo9mxntnnY6jN7x1hBjTCEgKX2Dspx9d1Lf/z76DeeogxBAo3mzoaXQHIiO2+wKiMdsabzXYLROZ/0mW3ScHV+3+SPX6Odri4W+EwiLeSTpJnLjlc7x0sOtZ5mknIYbA0dzjb3b0R2seNGmGbI/GUGqIQCHjRw50T7d/3Pliny9yaCJ/L1Elk4QFBaptNn8Mfv55B3S4Q0Pe8wdF4PJlvxRoV/z8UHfdZJQQEIkxSSinFW/oKCkVAxEcu+WBbk8IKo1ywAxxBAa88IGSI12m+MufdtV/esXz7GT8XlJXMv6o/tHafLNBKVlvVA0uoXZ7wlXt7jC0u8LgDwMsLFZAnzcE8wxyYGwPXGSL36nieA5oamYXKykOd9d/dMG1daK8EEKMCcK8PEXNM8vo2s2L9CatIrNaaHeFoKHdBxd7/BBNaPNoJAZLCilQy8RQqpPBIuZ5m6sf7roDjndOO/ecbPXtnMzjIcQYB2yo1Ox99ZHSmmyEGDDsmI8pGKmAf9GY/G2TG1odESjTy6GhzVvX0OrZBfHEGyuM83I6IcYk4SGTZu8/fnt0pKCUIyvOMNnmX7+0w8HLrg0wweWHxPicYFTQipraDbN2FmokvNP0kBTilM8aZs8BTX4R5CtF8EilFPpDMfPpO/0foLNCiCFQfHd53oFlxSraFwRQykRZySFlPA6ZbPg2xjPR6tiHhHm+uiBczJBj01STgxBj7DD/eG3RKxq5BNB/QHJIxCKQZzijcjkMkRYILAGQq9QsKWQUNUCOlp4gda03eHiqDo4EuMaIb87TVxdpBm//KMOOPm8Mutwx1h3lPNkS7uimo71toEZEqadZolQv1W6HCSg9JMSYcPtCvoJrO5ICydHhioEnGCdMwx0fnL7rY91ULmDxkL3tFrg62iHgcbG1qY8sYEPnVUSVCAwb5+r/YY5BkfaOjjCE6PVG4WdHOuGaPQweZoPlpg9kzK1oMso4vxMO+MHvckIsOrAS23yqtd9CJIaAkK+SmrJ95kSrG1QKKdBKCZsVnq+WQf0lD3j6xez6CK6spiVWdPzS/8YCKbnEY4JJI88ubCMJk8IbiIJRLYZ2ZxC63RE2D2N4CAkr05IlBcEEYfxBMSGG0IhRaVRk/ZCK0Rthxsjw+MKwcpYMXliTx27/sMkBjy0YqoW4ssaPXHdZCTGmIarmaKHF1g/bq4qhXC8GXaJByoIiKbv0nlw44wJmfN20BaaMGMTGGJuryttb+HqlFjSKoWpnnUkJJ2+7Mn7vTLsP/1gIMQSE1PgFX0SHhTAeX6JOXnxO9HjDlqk8RkKMSUIwJRcYw9/lRgrsgWDaz1/u7j9GiCE8VPD9oLs/zoj+FNcUI5vawhJ4eC4FLb0jl0PQ/vjkirOeEENorNDLTXw/m1pU5E1Un/U77WzouyJfDbccI4nReNeHRue9VrBjvWxV4jHq0DrxSiYYKokYPIyHgQaojyGGWhZjm6th2BvJUaCxsR5Iam+u316w34u0oB9frNv7s00l1XNnGZn/YYC6Lzscf/n2uQ2jIRuRGBOMNbPV0JQwMr0p9ao+ey/b5XfTQg2cuztohKJqudDZP+Z6VHOZavsvHy2tLlHF4PSVu/CHU5fg2eVq+p+eW3GAqJKJh5nvBzFTS5LimQyqEweIxJJ4LkZKTYnlpge9kTHHLx5bTG850uKGIzeDUFxSCBXz58L/XPRCkTJqGs3vJsQYA/SUhLfOlklEQ1YqPcE4MXBFFcmh0OhAKhk0Ot9s6Nl1L7+t3RkyFevksLFSDsaoE9TOO/D0Ch14I6zVQBNi5BAWFlDQmKJOkjENb283iBkbxKASs3bG8VtulBT3Er+g0Z5JdPEb9Iy6OliiEGLkEGQStjEb9KZUn7kTUiMSCoLjThusrVCywa53G2377vHfmeYVUNxehs8OL2+aTVRJrqGcIUdnghxOjvYHX7a54YfrDOvv8d80FjP/JxjhfjOZJUaIMcVITQ6+r0wFFxLqJBwd6qEgnl2pw0E145LKh8G08D3mcpA4xgRCPKx4ZHZCauBd7QrEYxpJOP0RqDDIzcM8H3p+gdz02CKtafi+sVBpf5ML7RFHanzC0R/G17Q7yNguw8Zd7D7e10iIkYNAqXHgqhOKF+rZu9rPPKhEW0fG04FLXX547fGic0iQWbQUZulHLtbpSmaxgTEMkL0dCtZau9zQZgvAtXZ7Y2uns7HNHmCJYfejkSsGrTwGckks2T2YECNXkSo18OKVaAalxpIiCg1R86nWfrjUGYA7jjArSZA0rNHKmChFbhtDik7WgKXVMuhzeMGgpYBWgHnhAo3Z3h+FQwz5sGBaxEgszAp7ejkN/3XGOar4CCHGFEiN/26yQfUK4xCp8VaDHb61QAPO5gg8UKECHTXS/BNJJKA2aEAsk4NkWOUSZpnfccbgtiMErX0+0FByRlLEVdn2+jvWCx2+J4mNkeP4RqUWPmLIUZlPwRfMnX2x0wdz8ijmztZl/B4GxXD0VTqg6sEHlh68+FE3YKArGo2BWi4xwSjbJxBiTCDCbCRrZC4nxjVQpRy67GZHZpbo5eALRYbYHGNBMuSOi3XYvqndHq98CoZHv0/iro4BHe4QLyMOl9zT9fJ863Rvnc0XhgBz0ax9YbjVG4KWvhi0uSTQh+UFYREP4sWJYPeLocMjBqtTAj0+MTR1BMAdn0jAkvOuK/g6cVcnAe5gxAo8F6RCEcYrkA69yB+ct1mvdPt3lOljrczLWuy8E2Bu7r/+uK3u6RXGqjl5CtO8RFN69CgkIu5YBQJD4Nd7/dDjCVm9wajV0R85VtfQY11QoNrsDUboNkfgmM0X2jnaYyT9McYAk0Gx8ydfL6nlU0JAyUSMITh4mjH0/YMDrStTXEcTjGySwm5bU6ExL+LoQ47odAfh0BXW00BYxvsYCTFGD/OqMs05qVgMc2gZrDdpIRtBaLUYsAcb5lr83f/e3XrTFqjL9YMkxBglFhWqblUYKNOASA9FGVEfg4WM6DfRclherBp5kpmz3OUNwv6Ltl2fXHHuFMJxEhtjFNAoJDVleoUpdZtSFrffbzpC4GLcyZMdHqAYaYLbCxJd+xjdD9ftfgw8WYRyrKTafRSYl6/abVByFzNjQCpPI2H+SkClEIOMMThDOFUZ3RKGO0a1FGQSMX3bEfxACMdK3NVRgJKKqtK9p1Zk18p6paRaKMdKiDEKo1OrSK951Ty69imkwjHpCDH4g07aEzMBxPgcIzBqmYp258gQp04hAS0lIcSYzijXy83mEgXkqyRscdD8fAX7V03F2N7fXMAcCOwD3u2J9w9v7WNz7jBg5cj14yVxDB6oNCpqfvGt0r3DZ6difCJfF0k7LQCXyWUKCqLRCFt9hvjV73sb3zhpW0nc1WlgW7y8vvh3989Sj0i/RmkhzzCARpNXwGZcqWgjewdiMu6KUqr4yDVPa58v0pjLB02MzyxYV6Gp2ThPx7leQckzZ9xiQVGyAx+WI6IEwXjH91bRtcQrETi+VqbawilqxZC1RTTWjdjabrH5mViOiGoFsWa20gTxhTJifApVjSwpUpq5icEv+QVti94bzWxPjFAgbmckKsWQGFYiMYQJM+ZojgfQvsDUvCSeXqGrIqpEwBIj7YVOybDCrG58jAZcpQFElQgEz68uyJildeZ2EPacsEGpXs6GxPedccGPH6RHFBULEURiZMDFrv6Mgajdx22gp2RgVEvYdRDM9P6XLx1sUCsbGtv9DkIMgeKrVk/aWANmY4lE4iFtGm/2BaCclsHhFk+y8istjt7w5nQcg6iSzLAiAYZHPBHuQFwqYAbX5Q4/PLFIDS+syR8oFNp/3sXaEVyFQwnSWInEEDAxbvRxt21GbwVD3UsK5fDrTaXw+GLtEBJg8dD+807OnTb3sPvMaWKQkHi2EyQWmTbO063leo9i7IrNi+OOi0oRGxHwKtRI4UJHEEq0WBEmggAWAwXEsOvz7j0d7pCFSAwB48h1156G215OQ1GrkGR1SbFdgd0jZh84p+T9RqfjTLvv9Vw/bkIMHurk7y2du7BH1kg7I5L1y99eqIHPWhwDBuuBS/ZJG8NNVMkEwxWInDp710cvLqTW5qXMa7fag1h8xD5XymOcayfoxmLbg+buELx6rGvrtd7Ab0gcYxrhQmf/MfREDl518pIUqcAmr++d731dCIVGhBijxPOrCzajJ/L4Qj1bZmi56R7yPtf8ssL5i0BbVMI+//4aQw1M4bhMQowJQrleVpV8XlWpZR9DiTEyjcvvdoPKkMcO2X1skZbeMFddQ4gxvWCamze0Am04QhxDeHGGKuvKGuOz0KrmqbcRYkwvmLmin6U6GdvmmSUGx7C7gNvFZnBhMzXEU8t0SK5qQoxpgu+ZjZyNWZEszT3x5BusROSahJhsJo/jITAy+tONBVsIMaYJlhUreTVJCXKoE5+tj/2rzi+M6ySDrFoIRighBg9IxelrVocQIzRSYmDeJ2ZvYZc9TO/DxmlCMEIJMXgYnmhLpAO6sMlpiJjVxeW2ehOd9ihGnSDWzVGtJ8SYBsTgMjyTwPWSjpTJAgEOqYESAzPFKa02VZ0QYggcWe0BjXzwNPYHuE8pSg00QlGdLClmw+hmQgwBI1veJ2JBATWgTlCV+INc3omdlRxIDFx1nV8gJ8SYCfjiBjudiAUXMRCO9jbw2uNeysOV6hWEGNMcOCf1g/O2rUlbA43QEEcDV6wrSdaW3DeLIhJD4Mg6lfnYLQ/OSbV8fs01kODr9WduJBCMxEyEGAJGpTHzVGaUEkeuu9hZZgevOvckl+RRaqRTKYgSrYwQY7qrEUh0+cV8i8+andZBqZH+9CYSh02EGNMUCTUygA8vOgbSANFDSUeOlMJmQozpBszhxGTh1G0oNQ5ccgzYGr6AKO0EAqJKpilOtbHVZNbh2//5q+4dSQ8FSeHycZ/mXK54J8S4B6CxmeYtyyeDkwHYMDmX+5rLFe+EGFlg74/bC8PXxhgV4mDURn26773Z0LMjGQ1FoNQQkkohxMiCD87bHSeYC4yX2IN3/wAx3HWQuT6kcf8F+0BhEU4jwslFSbBzU8+7cva4STvHDDCqZDtXlWlqcUqRWBQDU54cdEoJnLjhtpy5430SshcO0S89XHTumeVGExIKrY5QOAAnbnqguTcMXe6w4+g1lyEXj51Uu2fAbFqxXioWYaIO+9rRH2UbpBjV7AQCPtVkjteOd+242uM/UKiVwy1bAHo8EVhUpIRCnQy0CinNEAMNUAshhjCAhczbVpWpzDiGG+MSV7oDjDoQJzwNfuHsh0yavT9ZX1yDUxMRClkMnKEA/NuXduh2x0ApYwnnIBJDAMAuwH/zUNHu1eXqEXkYjM0AV/sC0OcL12fbD0Os3T/dUFyTLHym5DHQqaKgBxm8+lgh1F90MwRh4x052UCFGJ/DJEU6UrBxh2UGeGYpDefu+PZlJ4Z2gBRSSZwUqaheqoXvrtLmbFIwIUYKvrOErk1HiiQwzY8xKHdn2VXVmpT9aJXcfuo356tRJVURYuS4tHhkvr6GzweLNJlXRhk1sjkpLeTSGMjSTF++42DrDSyEGDkMRk3s5dvs9atWT12m99fP0Qwk+6JtkQ6t9mDONmgjxEiI/udW5fES6RjN/OiSY1cmyZOsc8VxFZmIYbnhsxBi5DCeX11Qm3Qps+FwixOlhTXd++sqNNXJcgNFhpEV2Av00yvujwkxclhaPLFIP17SAu6fNVhMlIkYf7jF9vUiEiNX8VfrCnfzlRaJtQ9rps+U6+XVSTWSiRgtPcH6XD4vM5oYGMx6cgnNK1ubkRSOI9ddu7JJn6QBK5dmViO7j/d9TIiRo3hqKV2brSUjAkPiv2my7YAs4etUN5WHGiESI1elxaML9CY+n32/yW7h01ht3Wx1FR/74uBlT12unx8xkRbZDU5MuuGxS7pMHy87xBB4usmKmIfBeCP7CDEELC1QhTCkQLuCTyBqwL7IFLs4eNmdswtnM54YjC2whY+0wGxvRmLs5LPP1HZMsgy7Pmnt3yeEczQTiWHmE7fA0gDM9ua709R2TOnWRg43e3BOSR0hRg7iO0vobXziFm+f7sOYhYXvfpPtmEQZkiUvd7EGrIMQIwexulydtZvNO2f7GnnELIZIIeyREVcjsbRG5+7jffuEcp5mGjGq12TJt0AvhFEho50QQGeTQp+3eK2QwyHwGU0MNBAzGZ3ohfzii44do/UastksGOl896xjl5DO1YwiRrZ+na8d76q/7QyOesgMTjBKgqun+IcXXNaWnmAdIUaOIllVls6u+KzZufVe/wdWuA/vEGy57t0jtHM1o4ix/4J932XGDQ0yz1Ob+GK54RjsigF0uINDXodT+PfeWadDKC5qKmbUhCNaKdt7qTNY3OoMQrcvDHZ/BI5edzX+8mjnk3AP0ciW3oCjqlL7glElZWtcJYkld7QtXvms68U+X+SU0M7VTCpRrN74J4YDyaoyRLcnCEal+PUlRZSJ8SroDncIC5WbPrnirB8tUcpp+dGa1QVVayrUoKMkQMtD8O9f2RrfOGnbsWGu2mwuo2i2XrXJZUns20GIkQMoUMu23zdLy6b92xhp8cBsJdZ+AJebib0tGJvDwqgevh6KeX0lfU4pE7P7Rjj9Ifhzs8GKJQKlhqGn+dMrbsc7p517Tray0xQdhBhTiGKt3Dybps5JGavqRw/kQaY20Km2xyuH2jdkI0eZXrFzWbG6lrUvojEoVIvh+/fnse2k1VSMeXDPev/V73tRomzIRXLMGBvDE4x02v1h57YHCzatLOVXJlBpVFCUVLz2j7e9/5Hpc+5AhDYZqT/DOlepKAZ/u6EYFNK4XY+DeHHCIleo/KFKVTHjxlLXeoOHiVcyhfjGXA39YIVmVN9JpP5lC6PXX+7y1aMaeXFt/gj3tdclYZu0cTVOqV6q3Q45OL9kRhGDufvXY8g7dVpANqA64NNP/K4r8KQ7EKzjslmQENgQFgmCnXVSJxTg/BLIwTLFGVXtzhiTG7BiHeKd/5N3KZ164b3BiH54hPRiVz8vG6BMJz/G2CUmvr8nmf63aYGWPtTszqlz9f8CDAA+dhy1gub3UQAAAABJRU5ErkJggg==';
export default img;
