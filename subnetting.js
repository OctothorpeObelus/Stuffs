function subnettable(hosts, table) {
  let netclass = ""
  let subnets = 0
  let cidr = ""
  let mn = 0

  netclass = (hosts <= 256)?"C": ((hosts <= 65535)?"B": ((hosts <= 16777215)?"A": "NaN"))
  for (let i = 4; i <= 24; i++) {
    if (hosts <= Math.pow(2, i)) {
      mn = Math.pow(2, i)
      subnets = (netclass == "C")?Math.pow(2, 8-i): ((netclass == "B")?Math.pow(2, 16-i): (netclass == "A")?Math.pow(2, 24-i): -1)
      cidr = "/"+(32-i)
      break;
    }
  }

  if (table) {
    var addresses = []; let snadd = []; let gwadd = []; let usadd = []; let bradd = []; let sn = 0; let gw = 0; let us = 0; let br = 0;
    for (let i = 0; i < mn*subnets; i++) {
      snadd[sn] = (i%mn===0) && i
      continue
    }
    addresses.push(snadd)
    addresses.push(gwadd)
    addresses.push(usadd)
    addresses.push(bradd)
  }

  console.log("Class: " + netclass + "\n# of Subnets: " + subnets + "\nCIDR Notation: " + cidr + "\nMN: " + mn)
  console.log(addresses)
}
