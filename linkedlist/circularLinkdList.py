class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def appendlist(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            new_node.next = self.head  # For circular linked list
        else:
            last = self.head
            while last.next != self.head:  # Traverse until the last node
                last = last.next
            last.next = new_node
            new_node.next = self.head  # For circular linked list

    def printlist(self):
        if not self.head:
            print("There is no head in the linked list")
            return
        current = self.head
        print(current.data, end=" ")
        current = current.next
        while current != self.head:
            print(current.data, end=" ")
            current = current.next
        print()

# Create a new circular linked list
circular_list = LinkedList()

# Append nodes
circular_list.appendlist(4)
circular_list.appendlist(30)
circular_list.appendlist(9)
circular_list.appendlist(5)

# Print the circular linked list
circular_list.printlist()