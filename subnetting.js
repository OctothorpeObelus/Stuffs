function subnettable(hosts, mode, table) {
  let netclass = ""
  let subnets = 0
  let cidr = ""
  let mn = 0

  if (mode) {
    netclass = (hosts <= 256)?"C": ((hosts <= 65535)?"B": ((hosts <= 16777215)?"A": "NaN"))
    for (let i = 4; i <= 24; i++) {
      if (hosts <= Math.pow(2, i)) {
        mn = Math.pow(2, i)
        subnets = (netclass == "C")?Math.pow(2, 8-i): ((netclass == "B")?Math.pow(2, 16-i): (netclass == "A")?Math.pow(2, 24-i): -1)
        cidr = "/"+(32-i)
        break;
      }
    }
  }

  console.log("Class: " + netclass + "\n# of Subnets: " + subnets + "\nCIDR Notation: " + cidr + "\nMN: " + mn)
}

subnettable(34, 1)
