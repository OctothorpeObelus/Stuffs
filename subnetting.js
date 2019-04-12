function subnettable(hosts, table) {
  let netclass = ""
  let subnets = 0
  let cidr = ""
  let mn = 0

  netclass = (hosts <= 256)?"C": ((hosts <= 65535)?"B": ((hosts <= 16777215)?"A": "NaN"))
  for (let i = 0; i <= 24; i++) {
    if (hosts <= Math.pow(2, i)) {
      mn = Math.pow(2, i)
      subnets = (netclass == "C")?Math.pow(2, 8-i): ((netclass == "B")?Math.pow(2, 16-i): (netclass == "A")?Math.pow(2, 24-i): -1)
      cidr = "/"+(32-i)
      break;
    }
  }

  if (table) {
    var addresses = []; let snadd = []; let gwadd = []; let usadd = []; let bradd = []; let sn = 0;
    for (let i = 0; i < mn*subnets; i++) {
      if (i == 0 | i%mn === 0) {
        snadd[sn] = sn+1
        gwadd[sn] = i
        usadd[sn] = (mn*sn+1)+"-"+(mn*sn+mn-2)
        bradd[sn] = mn*sn+mn-1
        sn++
      }

    }
    addresses.push(snadd)
    addresses.push(gwadd)
    addresses.push(usadd)
    addresses.push(bradd)
  }

  console.log("Class: " + netclass + "\n# of Subnets: " + subnets + "\nCIDR Notation: " + cidr + "\nMN: " + mn)

  //Parsing the Matrix
  let tableout = " SN # | GW | Usable | BC \n------|----|--------|----\n"
  for (let i = 0; i < addresses[0].length; i++) {
    tableout += " "+addresses[0][i]+" | "+addresses[1][i]+" | "+addresses[2][i]+" | "+addresses[3][i]+" \n"
  }
  console.log(tableout)
}
