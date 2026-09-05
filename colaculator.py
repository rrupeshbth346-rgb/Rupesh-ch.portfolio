import sys
import math
from PyQt6.QtWidgets import QApplication, QWidget, QVBoxLayout, QLineEdit, QPushButton, QGridLayout

class Calculator(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("RK Calculator")
        self.resize(400, 300)

        self.display = QLineEdit()
        self.display.setReadOnly(False)

        layout = QVBoxLayout()
        layout.addWidget(self.display)

        grid = QGridLayout()

        buttons = [
            ('1', 0, 0), ('2', 0, 1), ('3', 0, 2), ('/', 0, 3),
            ('4', 1, 0), ('5', 1, 1), ('6', 1, 2), ('*', 1, 3),
            ('7', 2, 0), ('8', 2, 1), ('9', 2, 2), ('-', 2, 3),
            ('0', 3, 0), ('.', 3, 1), ('=', 3, 2), ('+', 3, 3),
            ('(', 4, 0), (')', 4, 1), ('C', 4, 2), ('√', 4, 3),
            ('%', 5, 0), ('^', 5, 1)
        ]

        for text, row, col in buttons:
            button = QPushButton(text)
            button.clicked.connect(self.on_button_click)
            grid.addWidget(button, row, col)

        layout.addLayout(grid)
        self.setLayout(layout)

    def on_button_click(self):
        button = self.sender()
        text = button.text()

        if text == "=":
            try:
                expression = self.display.text()
                expression = expression.replace("^", "**")
                result = eval(expression)
                self.display.setText(str(result))
            except:
                self.display.setText("Error")

        elif text == "C":
            self.display.clear()

        elif text == "√":
            try:
                value = float(self.display.text())
                result = math.sqrt(value)
                self.display.setText(str(result))
            except:
                self.display.setText("Error")

        elif text == "%":
            try:
                value = float(self.display.text())
                result = value / 100
                self.display.setText(str(result))
            except:
                self.display.setText("Error")

        else:
            self.display.insert(text)

app = QApplication(sys.argv)

window = Calculator()
window.show()

sys.exit(app.exec())