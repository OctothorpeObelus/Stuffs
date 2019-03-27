def encode(message): #123456789
  msg=list(message) #Split message into characters
  msgout=[] #Instantiate encoded message
  for i in range(len(msg)):
    if (i%2==0):
      msgout.append(msg[i])
    else:
      msgout.insert(0,msg[i])
  return "".join(msgout) #864213579
