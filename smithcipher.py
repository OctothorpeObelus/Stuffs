import math

def encode(message): #123456789
  msg=list(message) #Split message into characters
  msgout=[] #Instantiate encoded message
  for i in range(len(msg)):
    if (i%2==0):
      msgout.append(msg[i])
    else:
      msgout.insert(0,msg[i])
  #864213579
  for i in range(len(msgout)):
    msgout[i] = chr(ord(msgout[i]) + 3)
  return "".join(msgout) #;975468:<

def decode(message):
  msg=list(message)
  msgout=[]
  msg1=(msg[::-1])[math.floor(len(message)/2):]
  msg2=message[math.floor(len(message)/2):]
  for i in range(len(msg)):
    if (i%2==0):
      msgout.insert(i,msg2[math.floor(i/2)])
    elif (i%2!=0):
      msgout.insert(i,msg1[math.floor(i/2)])
  
  for i in range(len(msgout)):
    msgout[i] = chr(ord(msgout[i]) - 3)
  return "".join(msgout)
