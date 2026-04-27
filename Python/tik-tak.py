game_board = [['0','A','B','C'],
              ['1','#','#','#'],
              ['2','#','#','#'],
              ['3','#','#','#']]

current_player = 'X'

def get_user_input(player):
    return input(f"Player {player}, enter your move (e.g., A1): ").upper()

def check_winner(board):
    # Check rows
    for row in range(1, 4):
        if board[row][1] == board[row][2] == board[row][3] != '#':
            return board[row][1]
    # Check columns
    for col in range(1, 4):
        if board[1][col] == board[2][col] == board[3][col] != '#':
            return board[1][col]
    # Check diagonals
    if board[1][1] == board[2][2] == board[3][3] != '#':
        return board[1][1]
    if board[1][3] == board[2][2] == board[3][1] != '#':
        return board[1][3]
    return None

def check_full_board(board):
    return all(board[row][col] != '#' for row in range(1, 4) for col in range(1, 4))

while True:
    # Display board
    for row in game_board:
        print(' '.join(row))

    # User input
    user_input = get_user_input(current_player)

    # Validate input
    if len(user_input) != 2 or user_input[0] not in 'ABC' or user_input[1] not in '123':
        print("Invalid input. Please enter a valid move (e.g., A1 or a1).")
        continue

    # Update board
    col = ord(user_input[0]) - ord('A') + 1
    row = int(user_input[1])

    if game_board[row][col] != '#':
        print("Cell already occupied. Please choose another move.")
        continue

    game_board[row][col] = current_player

    # Check for winner
    winner = check_winner(game_board)
    if winner:
        for row in game_board:
            print(' '.join(row))
        print(f"Player {winner} wins! 🎉")
        break

    # Check for draw
    if check_full_board(game_board):
        for row in game_board:
            print(' '.join(row))
        print("It's a draw! 🤝")
        break

    # Switch player
    current_player = 'O' if current_player == 'X' else 'X'