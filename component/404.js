
// переадресація
<Route path="*" element={<Navigate to="/not-found" />} />
<Route path="/not-found" element={<NotFoundView />} />