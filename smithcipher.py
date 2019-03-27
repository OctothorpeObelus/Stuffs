def encode(message):
  msg=list(message) #Split message into characters
  msgout=[] #Instantiate encoded message
  for i in range(len(msg)):
    if (i%2==0):
      msgout.append(msg[i])
    else:
      msgout.insert(0,msg[i])
  for i in range(len(msgout)):
    msgout[i] = chr(ord(msgout[i]) + 3)
  return "".join(msgout)
