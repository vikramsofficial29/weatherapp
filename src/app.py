import base64
import matplotlib.pyplot as plt
import io

# Generate your plot
plt.plot([1, 2, 3, 4, 5], [1, 4, 9, 16, 25])

# Save the plot to a in-memory buffer
buffer = io.BytesIO()
plt.savefig(buffer, format='png')
buffer.seek(0)

# Convert the plot image to Base64
plot_base64 = base64.b64encode(buffer.getvalue()).decode('utf-8')
