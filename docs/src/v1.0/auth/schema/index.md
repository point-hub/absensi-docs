---
aside: false
---

# Schema

This section describes the database structure and the relationships between collections. The schema consists of master data collections and transactional or operational collections used by the application.

- [Users Schema](https://kawanhunian.apidog.io/users-16945732d0)

## Relationship

- [Land Titles Schema](https://kawanhunian.apidog.io/land-titles-16945687d0)
- [Facilities Schema](https://kawanhunian.apidog.io/facilities-16945717d0)
- [Problems Schema](https://kawanhunian.apidog.io/problems-16945718d0)
- [Promos Schema](https://kawanhunian.apidog.io/promos-16945719d0)
- [Properties Schema](https://kawanhunian.apidog.io/properties-16383951d0)

## ERD

The ERD describes the physical structure of the MongoDB collections, including the fields stored in each collection and their direct data relationships.

<script setup>
import ErdUsers from './erd-users.vue'
</script>

<ClientOnly>
  <div style="width:100%;overflow: scroll;margin-top:48px;background: white"> 
    <ErdUsers />
  </div>
</ClientOnly>