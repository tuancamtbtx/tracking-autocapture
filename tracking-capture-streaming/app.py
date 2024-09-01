class EventStreaming:
    def __init__(self, event_name, event_data):
        self.event_name = event_name
        self.event_data = event_data

    def __str__(self):
        return f"{self.event_name}: {self.event_data}"